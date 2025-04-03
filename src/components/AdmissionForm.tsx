import { useState } from "react";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { AdmissionFormValues } from "./admission/types";
import StudentInfoSection from "./admission/StudentInfoSection";
import ParentSection from "./admission/ParentSection";
import AddressSection from "./admission/AddressSection";
import PreviousSchoolSection from "./admission/PreviousSchoolSection";
import AdmissionClassSection from "./admission/AdmissionClassSection";
import MedicalSection from "./admission/MedicalSection";
import EmergencyContactSection from "./admission/EmergencyContactSection";
import SubmissionSuccess from "./admission/SubmissionSuccess";
import { useToast } from "@/hooks/use-toast";

const AdmissionForm = () => {
  const form = useForm<AdmissionFormValues>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: AdmissionFormValues) => {
    setIsSubmitting(true);
    console.log(data);
    
    try {
      // This should be the URL to your Google Apps Script web app
      // NOT the spreadsheet URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxpxx7Ezj_Y4iad_Z6mJlt6m8rMWbdhN8B-8HemTh8/dev';
      
      // Convert the data object to a format suitable for transmission
      const formData = new FormData();
      
      // Flatten nested objects if any exist
      const flattenedData = flattenObject(data);
      
      // Append all form fields to the FormData
      Object.entries(flattenedData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      
      // Send the data to the Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Important when using Google Apps Script
      });
      
      // Since 'no-cors' mode doesn't give us response details,
      // we assume success if no error is thrown
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your application has been submitted successfully!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to flatten nested objects
  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, key) => {
      const pre = prefix.length ? `${prefix}.` : '';
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(acc, flattenObject(obj[key], pre + key));
      } else {
        acc[pre + key] = obj[key];
      }
      
      return acc;
    }, {});
  };

  const handleReset = () => {
    setSubmitted(false);
    form.reset();
  };

  return (
    <section id="admissions" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            School Admission Form
          </h2>
          <p className="text-gray-600">
            Please fill out all the required information below to begin the admission process.
            All submissions will be recorded in our database for processing.
          </p>
        </div>

        {submitted ? (
          <SubmissionSuccess onReset={handleReset} />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <StudentInfoSection form={form} />
              <ParentSection form={form} />
              <AddressSection form={form} />
              <AdmissionClassSection form={form} />
              <EmergencyContactSection form={form} />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default AdmissionForm;