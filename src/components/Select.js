import Villes from '../Data/Villes.json';
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import GoogleMaps from "../pages/GoogleMaps";
import {alpha, styled} from '@mui/material/styles';
import {CssTextField} from "./CssTextField";

const ville = Villes;

const Select = () => {

    return (

        <div
            className="relative flex flex-row w-full divide-none place-items-center z-10 place-content-center gap-3">
            <FormControl className="w-full">
                <Autocomplete
                    multiple
                    id="size-small-filled-multi"
                    size="medium"
                    options={ville}
                    getOptionLabel={(option) => option.post_code + ', ' + option.wilaya_name_ascii + ', ' + option.commune_name_ascii}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip sx={{color: '#fff', backgroundColor: '#357DED'}}
                                  variant="outlined"
                                  label={option.post_code + ', ' + option.wilaya_name_ascii + ', ' + option.post_address_ascii}
                                  size="medium"
                                  {...getTagProps({index})}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <CssTextField
                            {...params}
                            sx={{backgroundColor: '#fff', borderRadius: 1,}}
                            color="success"
                            variant="outlined"
                            label="Nom, spécialité, établissement…"
                            placeholder="Nom,spécialité,établissement…"
                        />
                    )}
                />
            </FormControl>
            <div className="form-control w-full m-0">
                <GoogleMaps/>
            </div>
        </div>
    );
}
/*search <div className=" rounded-lg border-dark-blue flex items-center justify-center   cursor-pointer">

    <a className=" btn btn-outline h-[56px]"><span className="iconlyBulk-Search text-dark-blue text-[45px] hover:-translate-y-1 hover:scale-105 hover:text-white duration-300 "><span className="path1"></span><span
        className="path2"></span></span></a>
</div>/*
/*<FormControl sx={{ mt: 2.5,}} className="w-full">
        <Autocomplete
            multiple
            id="size-small-filled-multi"
            size="medium"
            options={ville}
            getOptionLabel={(option) => option.post_code+', '+option.wilaya_name_ascii+', '+option.post_address_ascii}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip sx={{color:'#fff',backgroundColor:'#357DED'}}
                          variant="outlined"
                          label={option.post_code+', '+option.wilaya_name_ascii+', '+option.post_address_ascii}
                          size="medium"
                          {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Où?"
                    placeholder="Où?"
                />
            )}
        />
    </FormControl>*/
export default Select;