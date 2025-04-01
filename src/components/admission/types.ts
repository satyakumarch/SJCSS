
import { z } from "zod";

// Form validation schema
export const admissionFormSchema = z.object({
  // Student Information
  fullName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  religion: z.string().optional(),
  category: z.string().optional(),
  aadhar: z.string().optional(),
  
  // Parent/Guardian Details
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  guardianName: z.string().optional(),
  parentContact: z.string().optional(),
  parentEmail: z.string().optional(),
  occupation: z.string().optional(),
  annualIncome: z.string().optional(),
  
  // Address Details
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  country: z.string().optional(),
  
  // Previous School Details
  previousSchoolName: z.string().optional(),
  lastClassPassed: z.string().optional(),
  mediumOfInstruction: z.string().optional(),
  reasonForTransfer: z.string().optional(),
  
  // Admission Sought For
  classAppliedFor: z.string().optional(),
  preferredLanguage: z.string().optional(),
  
  // Medical Information
  bloodGroup: z.string().optional(),
  allergies: z.string().optional(),
  medicalConditions: z.string().optional(),
  
  // Emergency Contact Details
  emergencyContactName: z.string().optional(),
  emergencyRelationship: z.string().optional(),
  emergencyContactNumber: z.string().optional(),
});

// Form data type
export type AdmissionFormValues = z.infer<typeof admissionFormSchema>;
