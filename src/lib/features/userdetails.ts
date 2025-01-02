import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userid:0,
    userName:"",
    email:"",
    phoneNumber:"",
    education:[{id:0,courseName:"",yearFrom:"",yearTo:"",institute:"",userId:0}],
    projects:[{project_id:0,title:"",description:"",max_budget:"",min_budget:"",created_at:"",skills:[]}],
    bids:[],
    experience:[{id:0,title:"",yearFrom:"",yearTo:"",company:"",userId:0,description:""}]
  },
  reducers: {
    updateUser:(state,action)=>{
        const user=action.payload
        state.userid=user.id;
        state.email=user.email,
        state.userName=user.username,
        state.phoneNumber=user.phone,
        state.education=user.education,
        state.experience=user.experience,
        state.projects=user.projects,
        state.bids=user.bids
    },
    addeducation:(state,action)=>{
        const newedu=action.payload
        const education={
            id:0,
            userId:newedu.userid,
            courseName:newedu.coursename,
            yearFrom:newedu.yearfrom,
            yearTo:newedu.yearto,
            institute:newedu.institute
        }
        state.education.push(education)
    },
    removeeducation:(state,action)=>{
        const eduId=action.payload
        state.education=state.education.filter(s=>s.id!=eduId)
    },
    addexperience:(state,action)=>{
        const newexp=action.payload
        const experience={
            id:0,
            userId:newexp.userid,
            company:newexp.company,
            title:newexp.title,
            yearFrom:newexp.yearfrom,
            yearTo:newexp.yearto,
            description:newexp.description
        }
        state.experience.push(experience)
    },
    removeexperience:(state,action)=>{
        const expId=action.payload
        state.experience=state.experience.filter(s=>s.id!=expId)
    },
  }
})

export const { updateUser, addeducation,removeeducation,addexperience,removeexperience } = userSlice.actions;

export default userSlice.reducer;