import {useNavigate} from "react-router-dom";
import signup from "../images/signup.svg";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useTheme} from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import GoogleMaps from "./GoogleMaps";
import Maps from "../components/Maps";
import {useFormik} from 'formik';
import {useState} from "react";
import * as Yup from 'yup';

const SIGNUP_URL = 'http://localhost:8080/api/register';
/*
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
*/
const Specialites = [
    {job: 'Anesthésiologie'},
    {job: 'Biochimie médicale'},
    {job: 'Cardiologie (adulte ou pédiatrique)'},
    {job: 'Chirurgie cardiaque'},
    {job: 'Chirurgie colorectale'},
    {job: 'Chirurgie générale'},
    {job: 'Chirurgie générale oncologique'},
    {job: 'Chirurgie générale pédiatrique'},
    {job: 'Chirurgie orthopédique'},
    {job: 'Chirurgie plastique'},
];

/*function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}*/

const Signuppro = () => {
    const formik = useFormik({
        initialValues: {
            telephone: '',
            firstName: '',
            lastName: '',
            gender: '',
            birthday: null,
            adresse: null,
            specialite: [],
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Doit avoir moins de 20 caractères')
                .min(2, 'Doit avoir au moins 2 caractères')
                .required('Champ obligatoire'),
            lastName: Yup.string()
                .max(25, 'Doit avoir moins de 25 caractères')
                .min(2, 'Doit avoir au moins 2 caractères')
                .required('Champ obligatoire'),
            email: Yup.string().email('Adresse email invalide').required('Champ obligatoire'),
            password: Yup.string().oneOf([Yup.ref('confirmPassword')], 'Mot de passe différent!')
                .required('Champ obligatoire')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Doit avoir au moins 8 caractères, Une majuscule, Une miniscule, Un chiffre et un caractère spéciale"
                ),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Mot de passe différent!').min(8, 'Doit avoir au moins 8 caractères').required('Champ obligatoire'),
            telephone: Yup.string()
                .typeError('Doit être un chiffre')
                .required("Champ obligatoire")
                .max(10, "au plus 10 chiffres")
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Numéro invalid"),
            username: Yup.string().required('Champ obligatoire'),
            adresse: Yup.mixed().required('Champ obligatoire'),

        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik.values);

    let navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const [isChecked, setIsChecked] = React.useState(false);
    const [val, setVal] = useState(0);
    const isfocused = (false)
    /*
        const theme = useTheme();
        const [Specialite, setSpecialiteName] = React.useState([]);

        const handleChange = (event) => {
            const {
                target: {value},
            } = event;
            setSpecialiteName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };*/
    return (
        <div data-aos="fade-left"
             className="flex w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center">
            <div className="w-3/4 h-[87.5%] rounded-lg shadow-2xl bg-white flex flex-row">
                <div className="w-full h-full">
                    <div
                        className="absolute top-40 left-60 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                    </div>
                    <div
                        className="absolute top-60 left-72 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000">
                    </div>
                    <div className="grid area-fluid">
                        <div
                            className="w-10 h-10 rounded-full flex justify-center items-center mb-0 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="#" onClick={() => {
                                navigate("/")
                            }}>
                                <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                            </a>
                        </div>
                        <div className="h-full object-contain">
                            <img src={signup} alt="signupro"
                                 className="opacity-1 w-full h-full mb-0  relative"/>
                        </div>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit} id="doctor"
                      className="w-full h-full p-1 items-stretch overflow-scroll">
                    <div className="mt-5">
                        <TextField
                            onInput={(e) => {
                                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                            }
                            }
                            name="telephone"
                            className="w-full rounded-[10px]"
                            label="Téléphone" variant="outlined" {...formik.getFieldProps('telephone')}
                            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                            helperText={formik.touched.telephone && formik.errors.telephone} required/>
                    </div>
                    <div className="flex flex-row justify-between w-full mt-5">
                        <div className="">
                            <TextField label="Nom" variant="outlined" {...formik.getFieldProps('lastName')}
                                       error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                       helperText={formik.touched.lastName && formik.errors.lastName}
                                       required/>
                        </div>
                        <div className="">
                            <TextField label="Prénom" variant="outlined"  {...formik.getFieldProps('firstName')}
                                       error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                       helperText={formik.touched.firstName && formik.errors.firstName}
                                       required/>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-3 w-1/2">
                        <input type="radio" name="gender" value="male"
                               className="radio checked:bg-green-ish ml-3"
                               onChange={formik.getFieldProps("gender").onChange}
                        />

                        <span>Male</span>
                        <input type="radio" name="gender" value="female"
                               className="radio checked:bg-green-ish ml-3"
                               onChange={formik.getFieldProps("gender").onChange}
                        />

                        <span>Female</span>
                    </div>
                    <div className="mt-5">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date de naissance"
                                maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                                onChange={(value) => formik.setFieldValue("birthday", value, true)}
                                value={formik.values.birthday}
                                name="birthday"
                                renderInput={(params) => <TextField
                                    className="w-full active:border-4" {...params}
                                    error={Boolean(formik.touched.birthday && formik.errors.birthday)}
                                    helperText={formik.touched.birthday && formik.errors.birthday}

                                    required/>}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="mt-5">
                        <GoogleMaps formik={formik}/>
                        {console.log(formik.values)}
                        <div className="mt-5 h-[300px] w-full bg-coral rounded-lg flex justify-center items-center">
                            <Maps adresse={formik.values.adresse} />
                        </div>
                    </div>
                    <FormControl sx={{mt: 2.5,}} className="w-full">
                        <Autocomplete
                            multiple
                            id="size-small-filled-multi"
                            size="medium"
                            options={Specialites}
                            getOptionLabel={(option) => option.job}
                            isOptionEqualToValue={(option, value) =>
                                option.job === value.job
                            }
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip sx={{color: '#fff', backgroundColor: '#357DED'}}
                                          variant="outlined"
                                          label={option.job}
                                          size="medium"
                                          {...getTagProps({index})}
                                    />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    name="specialite"
                                    label="Spécialités"
                                    placeholder="Spécialités"
                                    onChange={(value) => formik.setFieldValue(["specialite"], value, true)}
                                    value={formik.values.specialite}
                                    error={formik.touched['specialite'] && !!formik.errors['specialite']}
                                    helperText={formik.touched['specialite'] && formik.errors['specialite']}
                                    required/>
                            )}
                        />
                    </FormControl>
                    <div>
                        <div className="form-control mt-5">
                            <label className="cursor-pointer label">
                                <span className="label-text">Votre spécialité ne figure pas dans la liste?</span>
                                <input type="checkbox" className="checkbox checkbox-accent"
                                       onChange={(e) => setIsChecked(e.target.checked)}/>
                            </label>
                        </div>


                        <TextField sx={{mt: 2.5,}} className="w-full" label="Spécialité" variant="outlined"
                                   disabled={!isChecked}/>


                    </div>

                    <label className="label">
                        <span className="label-text">Ajoutez votre agrément</span>
                    </label>
                    <input type="file" id="add" className="input justify-center w-full cursor-pointer"/>
                    <div className="mt-5">

                        <TextField className="w-full" label="Email"
                                   name="email"
                                   type="email"
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                                   variant="outlined" {...formik.getFieldProps('email')}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   required/>

                    </div>
                    <div className="mt-5">

                        <TextField className="w-full" label="Nom d'utilisateur"
                                   name="username"
                                   variant="outlined" {...formik.getFieldProps('username')}
                                   error={formik.touched.username && Boolean(formik.errors.username)}
                                   helperText={formik.touched.username && formik.errors.username}
                                   required/>

                    </div>
                    <div className="mt-5">

                        <TextField type="password"
                                   className="w-full"
                                   label="Mot de passe"
                                   variant="outlined"
                                   name="password" {...formik.getFieldProps('password')}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                                   color={((!(formik.touched.password && Boolean(formik.errors.password))) && formik.values.password !== '' && formik.values.confirmPassword !== '') ? 'success' : ''}
                                   focused={((!(formik.touched.password && Boolean(formik.errors.password))) && formik.values.password !== '') ? !isfocused : isfocused}
                                   required/>
                    </div>
                    <div className="mt-5">

                        <TextField type="password"
                                   className="w-full"
                                   label="Confirmer le mot de passe"
                                   name="confirmPassword"
                                   variant="outlined" {...formik.getFieldProps('confirmPassword')}
                                   error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                   helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                   color={((!(formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword))) && formik.values.confirmPassword !== '' && formik.values.password === formik.values.confirmPassword) ? 'success' : ''}
                                   focused={((!(formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword))) && formik.values.confirmPassword !== '') ? !isfocused : isfocused}
                                   required/>
                    </div>

                    <div className="flex w-full mt-3 mb-3">
                        <div className="grid h-20 flex-grow card rounded-box place-items-center ">
                            <btn
                                type="submit"
                                className="btn bg-[#2FBAE6] w-3/4 h-3/4 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Inscrivez-vous
                            </btn>
                        </div>

                    </div>

                </form>
            </div>
        </div>
        /*adress={form.adress}
        /* <InputLabel id="demo-multiple-chip-label" >Spécialités</InputLabel>
                        <Select

                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={Specialite}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Spécialité"/>}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {Specialites.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, Specialite, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>*/
        /* <div data-aos="fade-left" className="flex justify-center">
             <div className="w-3/4 shadow-2xl h-11/12 bg-white rounded-xl flex flex-row">
                 <div className="w-full h-full">
                     <div
                         className="absolute top-40 left-60 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                     </div>
                     <div
                         className="absolute top-60 left-72 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000">
                     </div>
                     <div className="grid area-fluid">
                         <div
                             className="w-10 h-10 rounded-full grid place-items-center mb-0 hover:-translate-y-1 hover:scale-110 duration-300">
                             <a href="#" onClick={() => {
                                 navigate("/")
                             }}>
                                 <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                             </a>
                         </div>
                         <img src={signup} alt="signupro"
                              className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                     </div>
                 </div>
                 <div className="my-auto mx-5 h-full w-full ">
                     <div id="doctor" className="form-control h-screen overflow-scroll ">
                         <label className="label">
                             <span className="label-text">Téléphone</span>
                         </label>
                         <input type="text" placeholder="Téléphone" className="input input-bordered"/>
                         <div className="flex flex-row w-full">
                             <div className="">
                                 <label className="label">
                                     <span className="label-text">Nom</span>
                                 </label>
                                 <input type="text" placeholder="Nom" className="input input-bordered w-11/12"/>
                             </div>
                             <div className="">
                                 <label
                                     className="label">
                                     <span className="label-text">Prénom</span>
                                 </label>
                                 <input type="text" placeholder="Prénom" className="input input-bordered w-full"/>
                             </div>
                         </div>
                         <div className=" flex justify-between mt-3 w-1/2">
                             <input type="radio" name="gender" value="male" className="radio checked:bg-green-ish ml-3"/>
                             <span>Male</span>
                             <input type="radio" name="gender" value="female"
                                    className="radio checked:bg-green-ish ml-3"/><span>Female</span>
                         </div>
                         <div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div><div className="">
                             <label className="label">
                                 <span className="label-text">Email</span>
                             </label>
                             <input type="text" placeholder="Email" className="input input-bordered"/>
                         </div>
                         <label className="label">
                             <span className="label-text">Mot de passe</span>
                         </label>
                         <input type="password" placeholder="Mot de passe" className="input input-bordered"/>

                         <div className="flex w-full mt-3 mb-3">
                             <div className="grid h-20 flex-grow card rounded-box place-items-center ">
                                 <a
                                     className="btn bg-coral w-3/4 h-3/4 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Inscrivez-vous
                                 </a>
                             </div>
                             <div className="divider divider-horizontal">OU</div>
                             <div className="grid h-20 flex-grow card rounded-box place-items-center">
                                 <a
                                     className="btn btn-outline border-green-ish text-green-ish hover:border-green-ish w-3/4 h-3/4 hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300"
                                     onClick={() => {
                                         navigate("/Signin")
                                     }}>Se
                                     connecter
                                 </a>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>
         </div>*/
    );
}

export default Signuppro;