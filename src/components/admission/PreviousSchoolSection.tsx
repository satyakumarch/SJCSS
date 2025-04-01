
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { AdmissionFormValues } from "./types";

interface PreviousSchoolSectionProps {
  form: UseFormReturn<AdmissionFormValues>;
}

const PreviousSchoolSection = ({ form }: PreviousSchoolSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-primary mb-4">4. Previous School Details</h3>
      <div className="grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="previousSchoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the Last School Attended</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastClassPassed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Class Passed</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mediumOfInstruction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medium of Instruction</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <label htmlFor="english">English</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hindi" id="hindi" />
                    <label htmlFor="hindi">Hindi</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="otherInstruction" />
                    <label htmlFor="otherInstruction">Other</label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reasonForTransfer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Transfer (if applicable)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PreviousSchoolSection;
