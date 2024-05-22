const displayOptionClass = "options-displayed";


export function fileNameExtractor(path:string){
    const filePath = path;
    const allFiles  = filePath.split("/");
    const file = allFiles[allFiles.length-1];
    const filename = file.split(".")[0];
    return filename;
}


export function lenderNavLinkGenerator(filepath:string){
    const filename = fileNameExtractor(filepath);
    const allWords = filename.split("-");
    const allWordsCapitalized =  allWords.map(word=>{
       const capitalizedWord =  capitalizedStringGenerator(word);
       return capitalizedWord;

    })
    const linkText = allWordsCapitalized.join(" ")
    return linkText
}

export function capitalizedStringGenerator(text: string){
    const oldText = text;
    const capitalizedText =  oldText.slice(0,1).toUpperCase() + oldText.slice(1).toLowerCase();
    return capitalizedText;
}

export function stringHypenSplitter(text: string){
    const allWords = text.split("-");
    const splitString = allWords.join(" ");
    return splitString;
}

export function camelCaseConverter(text:string){
    const input = text;
    const splitInput = input.split(/[-" "]/);
    const capitalizedSplitInput = splitInput.map((input, index)=>{
        if(index !== 0){
            const inputCapitalized = capitalizedStringGenerator(input);
            return inputCapitalized;
        }
        return input
    });
    const inputInCamelCase = capitalizedSplitInput.join("");
    return inputInCamelCase;
}



export function emailProcessor(email:string, firstname:string):string{
    const validFirstname = firstname.toLowerCase()
    const validEmail = email.replace(validFirstname,"")
    return validEmail;
}
export function phoneNumberProcessor(no:string):string{
    const chars = ["+234","(", ")", "-"," "," "]
    let newValue = no;
    chars.forEach((val)=>{
        newValue= newValue.replace(val, val !=="+234"?"":"0")
    })
    return newValue;
}
const allMonths = {
    "1":"Jan",
    "2":"Feb",
    "3":"Mar",
    "4":"Apr",
    "5":"May",
    "6":"Jun",
    "7":"Jul",
    "8":"Aug",
    "9":"Sep",
    "10":"Oct",
    "11":"Nov",
    "12":"Dec"
} as const ;
type allMonthNames = "Jan"|"Feb"|"Mar"|"Apr"|"May"|"Jun"|"Jul"|"Aug"|"Sep"|"Oct"|"Nov"|"Dec";
type allMonthNumbers = "1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"11"|"12";



export function dateProcessor(dateTime:string):string{
    const [date, time] = dateTime.split("T");
    const [year, month, day] = date.split("-");
    const [hour] = time.split(":");
    const anteOrPostDescription:"AM"|"PM" = parseInt(hour)>12?"AM":"PM"   
    const timedesc = `${hour}:00 ${anteOrPostDescription}`
    const monthNumber = parseInt(month).toString() as allMonthNumbers;
    const monthName:allMonthNames = allMonths[monthNumber]
    

    const dateJoinedDetails = `${monthName} ${day}, ${year} ${timedesc}`
    return dateJoinedDetails;
}





export function changeUserOptionsDisplayed(setState: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>, nextElement:HTMLDivElement){

    setState((prevElement)=>{
        if(prevElement?.id == nextElement.id){
           const prevElClasslist = prevElement.classList;
            prevElClasslist.contains(displayOptionClass)?prevElClasslist.remove(displayOptionClass):prevElClasslist.add(displayOptionClass);
            return prevElement
        }
            prevElement?.classList.remove(displayOptionClass);
            nextElement.classList.add(displayOptionClass);
            return nextElement;

    })
};
