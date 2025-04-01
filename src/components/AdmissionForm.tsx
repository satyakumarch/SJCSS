
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
      // Google Sheet script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxLceg1MrhHvn6Uz7OHKbcYjsVlY4Pkq7JbUVhSQKuNIV_RKJSVBKdedVqUJXxJbvvg/exec';
      
      // Format the data for the Google Sheet
      const formData = new FormData();
      
      // Append all form fields to the FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      
      // Send the data to the Google Sheet
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Success!",
          description: "Your application has been submitted successfully!",
        });
      } else {
        throw new Error('Network response was not ok');
      }
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
              <PreviousSchoolSection form={form} />
              <AdmissionClassSection form={form} />
              <MedicalSection form={form} />
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
