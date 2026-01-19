
export interface FormData {
  gender: 'male' | 'female';
  name: string;
  dob: string;
  mobile: string;
  wantsUpdates: boolean;
}

export interface InsuranceStats {
  rating: string;
  policiesSold: string;
  registeredUsers: string;
  partners: string;
}

export interface AIAdviceResponse {
  advice: string;
  suggestedPlanType: string;
}

export interface InsuranceQuote {
  provider: string;
  premium: string;
  coverage: string;
  features: string[];
  limitations: string[];
  exclusions: string[];
  fitScore: number;
  breakdown: {
    base: string;
    gst: string;
    riders: string;
    platformFee: string;
    onlineDiscount: string;
  };
}
