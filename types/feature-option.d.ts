
declare interface FeatureOptionInterface extends React.HTMLAttributes<HTMLDivElement> {
  featureName: "Video Interview"
  | "ATS Resume Review"
  | "Topic Based Q/A"
  | "Mock Aptitude"
  | "Behavioural Rounds"
  ;
  icon?: React.ReactNode;
};