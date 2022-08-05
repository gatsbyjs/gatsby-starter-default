// import React from 'react'
// import ImageLoader from '../ImageLoader/imageLoader'
// import crest from '../../../img/army-footer-crest.png'
// import nationaldefense from '../../../img/national-defense.png'
// import canada from '../../../img/canada.gif'
// import './footer.css'

// import useMediaQuery from '@mui/material/useMediaQuery'
// import Typography from '@mui/material/Typography'

// const Footer = ({}) => {
//     const matches = useMediaQuery('(max-width:500px)')

//     return (
//     !matches ?
//         <div className="footer">
//             <div className="left">
//                 <ImageLoader image={nationaldefense} style={{height: "25px", marginTop: '45px'}} />
//             </div>
//             <div>
//                 <ImageLoader image={crest} style={{height: '100px', marginTop: '-10px'}} />
//             </div>
           
//             <div className="footerright">
//                 <ImageLoader image={canada} style={{height: "30px", marginTop: '40px'}} />
//             </div>
//         </div>
//         :
//         <div className="footer-mobile">
//             <div className="left">
//                 <ImageLoader image={nationaldefense} style={{height: "20px", marginTop: '35px'}} />
//             </div>
//             <div>
//                 <ImageLoader image={crest} style={{height: '75px', marginTop: '-10px', marginLeft:'-30px'}} />
//             </div>
//             <div className="footerright">
//                 <ImageLoader image={canada} style={{height: "25px", marginTop: '30px'}} />
//             </div>
//         </div>
//     )
// }

// export default Footer