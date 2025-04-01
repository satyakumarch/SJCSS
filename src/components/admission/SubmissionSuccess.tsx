
import { Button } from "../ui/button";

interface SubmissionSuccessProps {
  onReset: () => void;
}

const SubmissionSuccess = ({ onReset }: SubmissionSuccessProps) => {
  return (
    <div className="text-center p-8 bg-accent/10 rounded-lg">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Thank you for your application!
      </h3>
      <p className="text-gray-600">
        We will review your application and get back to you shortly.
      </p>
      <Button
        className="mt-6"
        onClick={onReset}
      >
        Submit Another Application
      </Button>
    </div>
  );
};

export default SubmissionSuccess;
