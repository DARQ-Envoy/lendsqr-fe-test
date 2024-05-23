import React from 'react';
import {useRef } from 'react';

type InputType = "text"|"password"|"email";

type FieldPropsType = {
    desc:string,
    inputType?: InputType
}

const FormField:React.FC<FieldPropsType> = ({desc, inputType="text"}) => {


    type BtnActionType = "HIDE"|"SHOW"
    const btnAction: BtnActionType = "SHOW";

    // Element refs
    const inputRef:React.MutableRefObject<null | HTMLInputElement> = useRef<null | HTMLInputElement>(null);
    const buttonRef:React.MutableRefObject<null | HTMLButtonElement> = useRef<null | HTMLButtonElement>(null);
    const labelRef: React.MutableRefObject<null | HTMLLabelElement> = useRef<null|HTMLLabelElement>(null);

    function visibility(){
        if(inputRef.current){
            const inputEl = inputRef.current;
            const type = inputEl.type as InputType;
            const newType = type == 'password'? "text" : "password";
            inputEl.type = newType;
            changeBtnAction()
        }
    }
    function raiseLabel(){
        if(labelRef.current){
            labelRef.current.classList.add("raise-label")
        }
    }

    function changeBtnAction(){
        if ( buttonRef.current){
        const buttonEl = buttonRef.current;
        const newBtnAction:BtnActionType = buttonEl.textContent == "HIDE"?"SHOW":"HIDE";
        buttonEl.textContent = newBtnAction
        }
    }

  return (
    <>
    <div>
        <label htmlFor={`${desc}-field`} ref={(ref)=>{labelRef.current = ref}}>{desc}</label>
        <input type={inputType}  id={`${desc}-field`} ref={(ref)=>{
            inputRef.current = ref
        }} required onFocus={raiseLabel}/>
        {inputType == "password" && <button role='button' type='button' onClick={visibility} ref={(ref)=>{
            buttonRef.current = ref
        }} className={"form-action"}>{btnAction}</button>}
    </div>


    </>

  )
}

export {FormField};