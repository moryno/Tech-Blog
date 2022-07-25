// import { useState } from "react";
// import styled from "styled-components";
// import { publicRequest } from "../requestMethods";
// import {mobile} from "../responsive"

// const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background: 
//      linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
//      url("https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/19080_Aug_SeptCamp_BodySeries_invertedtriangle_hero_02.jpg")
//      center;
//      background-size: cover
//      ;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Wrapper = styled.div`
//     width: 40%;
//     padding: 20px;
//     background-color: white;
//     ${mobile({width: "75%"})};
// `;

// const Title = styled.h1`
//     font-size: 24px;
//     font-weight: 300;
// `;

// const Form = styled.form`
//     display: flex;
//     flex-wrap: wrap;
// `;

// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     margin: 20px 10px 0 0;
//     padding: 10px;
// `;

// const Agreement = styled.span`
//     font-size: 12px;
//     margin: 20px 0;
// `;

// const Button = styled.button`
//      width: 40%;
//      background-color: teal;
//      color: white;
//      padding: 15px 20px;
//      cursor: pointer;
//      border: none;
// `;


// export const Register = () => {
//     const [inputs, setInputs] = useState({
//         fName:"",
//         lName:"",
//         username:"",
//         email:"",
//         password:"",
//         confPassword:""
//     });
//     const [error, setError] = useState(false);

//     const handleChange = event=>{
//         const {name, value} = event.target;
//         setInputs(inputs=>{
//             return{
//                 ...inputs,[name]:value
//             }
//         });
//     }
    
//     const handleSubmit = async event=>{
//         event.preventDefault();
//         setError(false)
//         try{
//             if(inputs.password === inputs.confPassword){
//                 const {data} = await publicRequest.post("/auth/register", inputs);
//                 data && window.location.replace("/login");
//             }
//             else{
//                 setError(true);
//             }
//         }
//         catch(err){
//             setError(true);
//         }
        
//     }
//   return (
//     <Container>
//       <Wrapper>
//             <Title>CREATE AN ACCOUNT</Title>
//             <Form>
//                 <Input onChange={handleChange} name="fName" placeholder="First Name" />
//                 <Input onChange={handleChange} name="lName" placeholder="Last Name" />
//                 <Input onChange={handleChange} name="username" placeholder="Username" />
//                 <Input onChange={handleChange} name="email" placeholder="Email" />
//                 <Input onChange={handleChange} name="password" placeholder="Password" />
//                 <Input onChange={handleChange} name="confPassword" placeholder="Confirm Password" />
//                 <Agreement>
//                     By creating an account, I consent to the processing of my personal 
//                     data in accordance with the <b>PRIVACY POLICY</b>
//                 </Agreement>
//                 <Button onClick={handleSubmit}>CREATE</Button>
//                 {error && <span style={{color: "red", marginTop:"10px"}}>Password does not match!</span>}
//             </Form>
//       </Wrapper>
        
//     </Container>
//   )
// }
