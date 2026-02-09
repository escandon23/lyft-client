import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import "./Testimonials.scss";

const Testimonial = ({ name, image, comment , designation }) => {
  return (
    <Card sx={{ minWidth : 300, maxWidth : 400 ,  height:350 , margin : "0 auto" ,  position: "relative", textAlign: "center", paddingTop : 20}}>
        <div className="avatar-wrapper">
          <img src={image} alt={name} className="avatar" />
         </div>

      <CardContent>
        <Typography className="name">
          {name}
        </Typography>
         <Typography className="designation">
          {designation}
        </Typography>
        <Typography className='comment'>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
