
import './style.css/SearchHeading.css'

type Props = {
  heading: string;
  subHeading: string;
  className?: string;
};

const SectionHeading = ({ heading, subHeading, className }: Props) => {
  return (
    <div className={`section-heading ${className || ''}`}>
      <h1 className={`section-heading__heading ${className ? '' : 'section-heading__heading--sm'}`}>
        {heading}
      </h1>
      <p className={`section-heading__subheading ${className || ''}`}>
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
