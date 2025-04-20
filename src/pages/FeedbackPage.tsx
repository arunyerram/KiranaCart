
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Star } from 'lucide-react';

interface FeedbackTranslations {
  title: string;
  subtitle: string;
  experienceLabel: string;
  commentLabel: string;
  commentPlaceholder: string;
  submitButton: string;
  thankYouTitle: string;
  thankYouMessage: string;
  ratings: string[];
}

const translations: Record<string, FeedbackTranslations> = {
  en: {
    title: "Your Feedback Matters",
    subtitle: "Tell us about your shopping experience",
    experienceLabel: "How was your experience?",
    commentLabel: "Comments (optional)",
    commentPlaceholder: "Share your thoughts with us...",
    submitButton: "Submit Feedback",
    thankYouTitle: "Thank You!",
    thankYouMessage: "Your feedback helps us improve our service.",
    ratings: ["Very Poor", "Poor", "Average", "Good", "Excellent"]
  },
  hi: {
    title: "आपकी प्रतिक्रिया महत्वपूर्ण है",
    subtitle: "अपने खरीदारी अनुभव के बारे में हमें बताएं",
    experienceLabel: "आपका अनुभव कैसा रहा?",
    commentLabel: "टिप्पणियाँ (वैकल्पिक)",
    commentPlaceholder: "अपने विचार हमारे साथ साझा करें...",
    submitButton: "प्रतिक्रिया भेजें",
    thankYouTitle: "धन्यवाद!",
    thankYouMessage: "आपकी प्रतिक्रिया हमें अपनी सेवा में सुधार करने में मदद करती है।",
    ratings: ["बहुत खराब", "खराब", "औसत", "अच्छा", "बहुत अच्छा"]
  },
  te: {
    title: "మీ అభిప్రాయం ముఖ్యం",
    subtitle: "మీ షాపింగ్ అనుభవం గురించి మాకు చెప్పండి",
    experienceLabel: "మీ అనుభవం ఎలా ఉంది?",
    commentLabel: "వ్యాఖ్యలు (ఐచ్ఛికం)",
    commentPlaceholder: "మీ ఆలోచనలను మాతో పంచుకోండి...",
    submitButton: "అభిప్రాయాన్ని సమర్పించండి",
    thankYouTitle: "ధన్యవాదాలు!",
    thankYouMessage: "మీ అభిప్రాయం మా సేవను మెరుగుపరచడానికి సహాయపడుతుంది.",
    ratings: ["చాలా చెడ్డది", "చెడ్డది", "సగటు", "మంచిది", "అద్భుతమైనది"]
  }
};

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState<string>("5");
  const [comment, setComment] = useState<string>("");
  const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');
  const [submitted, setSubmitted] = useState(false);
  
  const t = translations[language];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would submit this to your backend
    console.log('Feedback submitted:', { rating, comment, language });
    
    toast({
      title: `${t.thankYouTitle}`,
      description: `${t.thankYouMessage}`,
    });
    
    setSubmitted(true);
    
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  
  const handleLanguageChange = (lang: 'en' | 'hi' | 'te') => {
    setLanguage(lang);
  };

  return (
    <Layout>
      <div className="bg-kirana-light py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.subtitle}</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="flex gap-2 mb-6">
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'en' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('en')}
                      className="flex-1"
                    >
                      English
                    </Button>
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'hi' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('hi')}
                      className="flex-1"
                    >
                      हिन्दी
                    </Button>
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'te' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('te')}
                      className="flex-1"
                    >
                      తెలుగు
                    </Button>
                  </div>
                  
                  <p className="font-medium mb-4">{t.experienceLabel}</p>
                  <RadioGroup 
                    value={rating} 
                    onValueChange={setRating}
                    className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex items-center space-x-2">
                        <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                        <Label 
                          htmlFor={`rating-${value}`} 
                          className="flex items-center cursor-pointer"
                        >
                          <div className="flex">
                            {Array.from({ length: value }).map((_, i) => (
                              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                            {Array.from({ length: 5 - value }).map((_, i) => (
                              <Star key={i} size={16} className="text-gray-300" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm">{t.ratings[value-1]}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="comment" className="block font-medium mb-2">
                    {t.commentLabel}
                  </Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={t.commentPlaceholder}
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kirana-primary hover:bg-kirana-dark text-white"
                >
                  {t.submitButton}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={32} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.thankYouTitle}</h2>
                <p className="text-gray-600 mb-4">{t.thankYouMessage}</p>
                <p className="text-sm text-gray-500">Redirecting to homepage...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
