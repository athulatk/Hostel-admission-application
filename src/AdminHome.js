import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database"
import { db } from "./firebase_config";
import { PDFExport } from "@progress/kendo-react-pdf";
import {useNavigate} from 'react-router-dom'
import TitleSVG from './TitleSVG';
import { JsonToExcel } from "react-json-to-excel";

function AdminHome({submitted}) {
    const [userDetails, setUserDetails] = useState([])

    // var temp=[{
    //     "address": "Narkala house, Ayyankave,Parakalai P.O Kanhangad.",
    //     "admno": "21LH301",
    //     "aincome": "",
    //     "applicationNo": 18,
    //     "bpl": "Yes",
    //     "category": "obch",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "INFORMATION SECURITY ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1999-02-26",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "ANAGHA K V",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "09747723735",
    //     "parentaddr": "Narkala house,ayyankave,parakalai p.o",
    //     "parentaddress": "",
    //     "parentmob": "9495949542",
    //     "parentname": "D/O venu kp ",
    //     "pemail": "anaghakv1999@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "anaghakv1999@gmail.com"
    //   },
    //   {
    //     "address": "Lignite,Asarikandy paramba kuthiravattom po calicut kerala 673016",
    //     "admno": "211179",
    //     "aincome": "96000",
    //     "applicationNo": 20,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Propulsion engh.",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Mechanical Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1998-11-11",
    //     "examrank": "812",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Idithsaj P T",
    //     "gender": "male",
    //     "goi": "No",
    //     "mob": "9446792451",
    //     "parentaddr": "Lignite, Asarikandy paramba kuthiravattom po calicut kerala 673016",
    //     "parentaddress": "",
    //     "parentmob": "9447232993",
    //     "parentname": "Sasidharan P T",
    //     "pemail": "idithsaj98@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "idithsaj98@gmail.com"
    //   },
    //   {
    //     "address": "Kalarikkamadathil, Pallippattumuri, Thrikkunnappuzha, Alappuzha, Pin :690515",
    //     "admno": "211003",
    //     "aincome": "",
    //     "applicationNo": 2,
    //     "bpl": "Yes",
    //     "category": "oec",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Computer Science and Engineering ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "2000-05-15",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Rajimol Raju ",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "7902682179",
    //     "parentaddr": "Kalarikkamadathil, Pallippattumuri, Thrikkunnappuzha, Alappuzha, Pin:690515",
    //     "parentaddress": "",
    //     "parentmob": "9249778058",
    //     "parentname": "Raju G ",
    //     "pemail": "rajimolraju157@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "rajimolraju157@gmail.com"
    //   },
    //   {
    //     "address": "TMRA D-22 Pangappara",
    //     "admno": "211013",
    //     "aincome": "96000",
    //     "applicationNo": 13,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Information security",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1999-04-21",
    //     "examrank": "1378",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Shamila Naval MK",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "9544099637",
    //     "parentaddr": "Menakkuth House, parakkalmukku, Kunnakkavu PO, Malappuram",
    //     "parentaddress": "",
    //     "parentmob": "9447282284",
    //     "parentname": "Ashraf",
    //     "pemail": "temp211013@cet.ac.in",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "temp211013@cet.ac.in"
    //   },
    //   {
    //     "address": "Leela Sadanam, Choranadu, Vadamon PO, Anchal-691306, Kollam, Kerala ",
    //     "admno": "210968",
    //     "aincome": "",
    //     "applicationNo": 16,
    //     "bpl": "Yes",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Geotechnical Engineering",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Civil Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1995-04-08",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Anju Ratheesh",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "6282706894",
    //     "parentaddr": "Leela Sadanam, Choranadu, Vadamon PO, Anchal-691306, Kollam, Kerala ",
    //     "parentaddress": "",
    //     "parentmob": "9447184115",
    //     "parentname": "Retheesan V",
    //     "pemail": "anju4115.sr@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "anju4115.sr@gmail.com"
    //   },
    //   {
    //     "address": "Adiparambil House,P.O.Mathilakam,Thrissur ",
    //     "admno": "210976",
    //     "aincome": "",
    //     "bpl": "Yes",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Computer science and engineering ",
    //     "declaration0": false,
    //     "declaration1": false,
    //     "declaration2": false,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1999-04-17",
    //     "examrank": "",
    //     "formSubmitted": false,
    //     "formno": 3,
    //     "fullname": "Akshaya K P",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "9778552247",
    //     "parentaddr": "Adiparambil House,P.O.Mathilakam,Thrissur ",
    //     "parentaddress": "",
    //     "parentmob": "9847417806",
    //     "parentname": "Meena A C",
    //     "pemail": "akshayasunaj9992@gmail.com",
    //     "programme": "pg",
    //     "sem": "S3"
    //   },
    //   {
    //     "address": "A",
    //     "admno": "210964",
    //     "aincome": "",
    //     "bpl": "No",
    //     "category": "",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "CSE",
    //     "declaration0": false,
    //     "declaration1": false,
    //     "declaration2": false,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1997-09-05",
    //     "examrank": "",
    //     "formSubmitted": false,
    //     "formno": 2,
    //     "fullname": "Abdu Samad M",
    //     "gender": "male",
    //     "goi": "No",
    //     "mob": "9656557219",
    //     "parentaddress": "",
    //     "parentmob": "",
    //     "parentname": "",
    //     "pemail": "teml210964@cet.ac.in",
    //     "programme": "pg",
    //     "sem": "S2"
    //   },
    //   {
    //     "address": "Kozhikode ",
    //     "admno": "201602",
    //     "aincome": "36000",
    //     "applicationNo": 10,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "8.34",
    //     "course": "MTech",
    //     "courseother": "CS",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1998-03-08",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Reshmi T",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "8547565725",
    //     "parentaddr": "Kozhikode ",
    //     "parentaddress": "",
    //     "parentmob": "9446258982",
    //     "parentname": "Raveendran T",
    //     "pemail": "reshmit16@gmail.com",
    //     "programme": "pg",
    //     "sem": "S4",
    //     "userSignInEmail": "reshmit16@gmail.com"
    //   },
    //   {
    //     "address": "Valiyavilakathu Veedu,kodankara,Mariyapuram P.O,Amaravila via,Thiruvananthapuram,Kerala.",
    //     "admno": "210984",
    //     "aincome": "36000",
    //     "applicationNo": 4,
    //     "bpl": "No",
    //     "category": "general",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Computer science ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1999-04-10",
    //     "examrank": "0",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "JULIE CHRISTY",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "07902591963",
    //     "parentaddr": "Valiyavilakathu Veedu Kodankara Mariyapuram P.O.Amaravila via,Thiruvananthapuram.Kerala.",
    //     "parentaddress": "",
    //     "parentmob": "8547116980",
    //     "parentname": "Howard Y",
    //     "pemail": "juliechristy1999@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "juliechristy1999@gmail.com"
    //   },
    //   {
    //     "address": "Eranchadi(ho), kannankara(po), chelannur,kozhikode,673616",
    //     "admno": "211007",
    //     "aincome": "54000",
    //     "applicationNo": 6,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Information security ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1997-10-25",
    //     "examrank": "1858",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "SWABNA E ",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "8089498899",
    //     "parentaddr": "Eranchadi (ho), kannankara (po), chelannur, kozhikode,673616",
    //     "parentaddress": "",
    //     "parentmob": "9656507758",
    //     "parentname": "Babu E",
    //     "pemail": "swabna1997@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "swabna1997@gmail.com"
    //   },
    //   {
    //     "address": "Kizhakkayil house, Puthiyangadi (P.O),Puthiyappa, Kozhikode ",
    //     "admno": "211000",
    //     "aincome": "",
    //     "applicationNo": 3,
    //     "bpl": "Yes",
    //     "category": "oec",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Computer Science and Engineering ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1998-04-16",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Athira Pradeep K ",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "8078461854",
    //     "parentaddr": "Kizhakkayil house, Puthiyangadi (P.O),Puthiyappa, Kozhikode ",
    //     "parentaddress": "",
    //     "parentmob": "8086217422",
    //     "parentname": "Pradeepan",
    //     "pemail": "athirakpradeep98@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "athirakpradeep98@gmail.com"
    //   },
    //   {
    //     "address": "tkfarshi@gmail.com",
    //     "admno": "211015",
    //     "aincome": "45000",
    //     "applicationNo": 14,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Information Security",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1997-05-04",
    //     "examrank": "991",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Farshana T K",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "7510207935",
    //     "parentaddr": "Thommankadan(H), Kalikavu(po), Chengode, Malappuram(dist), Kerala. Pin: 676525",
    //     "parentaddress": "",
    //     "parentmob": "9497204204",
    //     "parentname": "Firos Khan TK",
    //     "pemail": "farshanatk26@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "temp211015@cet.ac.in"
    //   },
    //   {
    //     "address": "Monika,Punukkannoor perumpuzha P.O Kollam-691504",
    //     "admno": "210993",
    //     "aincome": "600000",
    //     "applicationNo": 19,
    //     "bpl": "No",
    //     "category": "general",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Information Security",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1998-03-13",
    //     "examrank": "1044",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "GOPIKA MOHAN",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "+918078725584",
    //     "parentaddr": "Monika Punukkannor Perumpuzha P.O kollam-691504",
    //     "parentaddress": "",
    //     "parentmob": "9447556537",
    //     "parentname": "Mohanan Pillai",
    //     "pemail": "gopikagopumohan98@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2",
    //     "userSignInEmail": "gopikagopumohan98@gmail.com"
    //   },
    //   {
    //     "address": "Shahiba manzil thekkumbhagom paravoor p.o kollam",
    //     "admno": "211021",
    //     "aincome": "",
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Information security ",
    //     "declaration0": false,
    //     "declaration1": false,
    //     "declaration2": false,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1998-04-25",
    //     "examrank": "",
    //     "formSubmitted": false,
    //     "formno": 1,
    //     "fullname": "Shahiba.s",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "7012997436",
    //     "parentaddress": "",
    //     "parentmob": "",
    //     "parentname": "",
    //     "pemail": "shahibas98@gmail.com",
    //     "programme": "pg",
    //     "sem": "S2"
    //   },
    //   {
    //     "address": "Kavumvathukkal House, Kakkodi Kannadikkal Road Vengeri PO",
    //     "admno": "21LH149",
    //     "aincome": "",
    //     "applicationNo": 11,
    //     "bpl": "No",
    //     "category": "st",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Traffic and Transportation Engineering ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Civil Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1997-06-18",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Thara K Joseph",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "+918281639877",
    //     "parentaddr": "Kavumvathuckal House Vengeri P O Kozhikode ",
    //     "parentaddress": "",
    //     "parentmob": "9447059877",
    //     "parentname": "K J Joseph ",
    //     "pemail": "tharakj1997@gmail.com",
    //     "programme": "pg",
    //     "sem": "S3",
    //     "userSignInEmail": "tharakj1997@gmail.com"
    //   },
    //   {
    //     "address": "Poonakattil  house, morayur post, morayur, malappuram, 673642",
    //     "admno": "201503",
    //     "aincome": "",
    //     "applicationNo": 12,
    //     "bpl": "No",
    //     "category": "sc",
    //     "cgpa": "",
    //     "course": "MTech",
    //     "courseother": "Computer Science and Engineering ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": true,
    //     "declaration3": false,
    //     "declaration4": false,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1996-08-22",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Greeshma. P",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "8606533420",
    //     "parentaddr": "Poonakattil house, morayur post, morayur, malappuram,  673642",
    //     "parentaddress": "",
    //     "parentmob": "9562788009",
    //     "parentname": "Raveendran. P",
    //     "pemail": "greeshmapravi@gmail.com",
    //     "programme": "pg",
    //     "sem": "S4",
    //     "userSignInEmail": "tve20csce06@cet.ac.in"
    //   },
    //   {
    //     "address": "Kozhikode ",
    //     "admno": "201072",
    //     "aincome": "60000",
    //     "applicationNo": 8,
    //     "bpl": "No",
    //     "category": "obc",
    //     "cgpa": "8",
    //     "course": "MTech",
    //     "courseother": "Computer Science and Engineering ",
    //     "declaration0": true,
    //     "declaration1": true,
    //     "declaration2": false,
    //     "declaration3": true,
    //     "declaration4": true,
    //     "dept": "Computer Science and Engineering",
    //     "differentlyabled": "No",
    //     "dob": "1997-03-15",
    //     "examrank": "",
    //     "formSubmitted": true,
    //     "formno": 3,
    //     "fullname": "Ameena K Nazeer",
    //     "gender": "female",
    //     "goi": "No",
    //     "mob": "9744192922",
    //     "parentaddr": "Kozhikode",
    //     "parentaddress": "",
    //     "parentmob": "9447856434",
    //     "parentname": "Nazeer",
    //     "pemail": "tve20csce02@cet.ac.in",
    //     "programme": "pg",
    //     "sem": "S4",
    //     "userSignInEmail": "tve20csce02@cet.ac.in"
    //   }]

    // const location=useLocation();
    // const submitted=location.state.submitted

    // const logout = () => {
    //     auth.signOut();
    // };
    // console.log("location : ",location)


    useEffect(() => {
       
        var dbRef = ref(db, "users/");

        onValue(dbRef, (snapshot) => {
            console.log("snapshot : ",snapshot.val())
            if (snapshot.exists()) {

                const userdata=snapshot.val()

                var tempDetails=[]

                for(var uid in userdata)
                {
                    // arrayObj={}
                    console.log(uid)
                    var user=userdata[uid]
                    if(user.formSubmitted===submitted)
                    {
                        // for (var aname of arrNames) {
                        //     if (user[aname] === undefined) arrayObj[aname] = [];
                        // }

                        tempDetails.push({
                            ...userdata[uid]
                            // ...arrayObj
                        })
                    }
                }

                // setDetails({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
                // console.log(tempDetails)
                setUserDetails([...tempDetails])

                // console.log(snapshot.val().formno);
                // setformno(snapshot.val().formno);
                // console.log({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
            } 
        });
    }, [submitted])

    // useEffect(() => {
    //     console.log(location.state)
    //     if(location.state)
    //     {
    //         setSubmitted(location.state.submitted)
    //         setLogout(location.state.logout)
    //     }
    // }, [location.state])
    
    const pdfExportComponent = React.useRef(null);
    const [download, setDownload] = useState(false)
    
    // const ListPdf =() => {
    //     return(
    //     <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
    //     <div className="h-full w-full flex flex-col items-center justify-center mt-12">
    //         <table className="table-auto w-9/12 border-2 border-collapse break-all rounded-xl drop-shadow-2xl">
    //             <thead className="bg-primary text-white">
    //                 <tr className="border border-white-400 border-collapse break-all">
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Sl.No</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Full Name</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">E-mail</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">DOB</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Gender</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Mobile No.</th>
    //                 </tr>
    //             </thead>
    //             <tbody className="">
    //                 {userDetails.map((item,index)=>{
    //                     return(
    //                         <tr className="border border-gray-400 border-collapse break-all odd:bg-white hover:bg-primary hover:text-white">
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{index+1}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.email}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.fullname}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.dob}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.gender}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.mob}</td>
    //                         </tr>
    //                     )
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    //     </PDFExport>
    //     )
    // }

    const navigate=useNavigate();
    const generateUserPdf = (details)=>{
        navigate(
            "/admin/userpdf",  
            {
                state:{
                    details:details
                }
            },
            {
                target:"_blank"
            }
        );
        // console.log(details)
    }

    // const logout = () => {
    //     auth.signOut().then(() => {
    //         setUser(null);
    //     });
    // };


    return (
        <div className="h-full w-full flex flex-col items-center justify-center mt-9 mb-12">
            {/* <header className="bg-white shadow-md py-4 w-full">
                <div className="w-11/12 md:w-9/12 m-auto flex justify-between items-center">
                    <div className="w-64">
                        <TitleSVG />
                    </div>
                    <button
                        className="btn"
                        onClick={() => {
                            logout();
                        }}
                    >
                        Logout
                    </button>
                </div>
            </header> */}

            <div className="flex flex-row items-center space-x-2 w-11/12 justify-end">
                <JsonToExcel
                    title="Download as Excel"
                    data={userDetails}
                    fileName="hostel-application-users-data"
                    btnClassName="bg-primary text-white p-4 rounded-3xl my-3 filter drop-shadow-xl hover:bg-primary hover:text-white font-semibold"
                />
                <button className="bg-white text-primary p-4 rounded-3xl my-3 filter drop-shadow-xl hover:bg-primary hover:text-white font-semibold"
                    onClick={()=>{
                        // savePDF(document.getElementsByClassName("pdf"), {
                            //     paperSize: "A4",
                            // });
                        setDownload(true)
                        if (pdfExportComponent.current && download) {
                            pdfExportComponent.current.save();
                            setDownload(false);
                        }
                    }}>{download?"Generate PDF":"PDF Preview"}</button>
            </div>

            <div className={download?"w-full":"w-11/12"}>
                <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
                {   download&&
                    (
                        <header className="bg-white shadow-md py-4">
                        <div className="w-full ml-10 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                        </div>
                        <h1 className="text-4xl text-tertiary font-light mt-8 text-center">Application for the post of Director, CETSOM</h1>
                        <h2 className="text-3xl text-center font-bold my-3 text-opacity-30">Applicants list</h2>
                        </header>
                    )
                }
                <table className="table-auto w-full rounded-xl">
                    <thead className="bg-primary text-white">
                        <tr className="border border-white-400 border-collapse break-all">
                        <th className="p-3 border border-white-400 border-collapse break-all">Sl.No</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Full Name</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">E-mail</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">DOB</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Gender</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Mobile No.</th>
                        {!download&&<th className="p-3 last:bg-gray-100"></th>}
                        </tr>
                    </thead>
                    <tbody className="">
                        {userDetails.map((item,index)=>{
                            return(
                                <tr key={index} className="odd:bg-white hover:bg-gray-300">
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{index+1}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.fullname}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.pemail}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.dob}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.gender}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.mob}</td>
                                    {!download&&<td className="p-2 last:bg-gray-100"> 
                                        <button 
                                            onClick={()=>{generateUserPdf(item)}}
                                            className="bg-primary rounded-3xl w-full text-white p-2 font-semibold" 
                                        >
                                            View
                                        </button> 
                                    </td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </PDFExport>
            </div>
        </div>
    )
}

export default AdminHome
