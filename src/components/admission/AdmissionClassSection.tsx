
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { AdmissionFormValues } from "./types";

interface AdmissionClassSectionProps {
  form: UseFormReturn<AdmissionFormValues>;
}

const AdmissionClassSection = ({ form }: AdmissionClassSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-primary mb-4">5. Admission Sought For</h3>
      <div className="grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="classAppliedFor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class Applied For</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Language</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="englishLang" />
                    <label htmlFor="englishLang">English</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hindi" id="hindiLang" />
                    <label htmlFor="hindiLang">Nepali</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="otherLang" />
                    <label htmlFor="otherLang">Other</label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AdmissionClassSection;
