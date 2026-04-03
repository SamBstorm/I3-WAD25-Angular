import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{

    public static checkAge(ageLimit : number) : ValidatorFn {
        return function(control : AbstractControl) : ValidationErrors | null{
            return CustomValidators.CheckAge(control, ageLimit)
        }
    }

    private static CheckAge(control : AbstractControl, ageLimit : number) : ValidationErrors | null {
        const validError : ValidationErrors = {
            checkdate : true
        };
        if(!control.value) return null;
        let dateValue : Date;
        try{
            dateValue = new Date(control.value);
        }
        catch(error){
            return validError;
        }
        let temp = new Date().getTime() - dateValue.getTime();
        if(new Date(temp).getFullYear()-1970 >= ageLimit) return null;
        return validError;
    }

}