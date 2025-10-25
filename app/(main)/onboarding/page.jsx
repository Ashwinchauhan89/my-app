import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";

const Onboarding = () => {
  return (
    <main> 
       <OnboardingForm industries ={industries} />
    </main>
   )
  };
  

export default Onboarding