import timeline from '../data/timeline';
import TimelineItem from './timeline-item';
import Title from './title';

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 ">
      <div className='w-full md:w-7/12'>
        <Title>Timeline</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline;
