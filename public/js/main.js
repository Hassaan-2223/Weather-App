
const p_day = document.getElementById('day');
const p_date = document.getElementById('date');

const submitbtn = document.getElementById('submit');
const city = document.getElementById('cityname');
const temp_h = document.getElementById('temp-here');

const temp = document.getElementById('temp');


const vis_1 = document.getElementById('temperature');
const vis_2 = document.getElementById('area');

// "http://api.openweathermap.org/data/2.5/weather?q=Lahore&units=metric&appid=1649970884e9d8fb0691b82d5edaecce"


const getcurrentday = () => {
    const currentdate = new Date();
    let days = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let cur_day =days[currentdate.getDay()-1];

    let cur_date = currentdate.getDate();

    let month = months[currentdate.getMonth()];

    p_day.innerHTML= cur_day;
    p_date.innerHTML= `${cur_date} ${month}`;

}

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = city.value;
    // console.log(cityVal);
    let empty = 'enter value';

    if(cityVal === ""){
        temp_h.innerHTML = empty;
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1649970884e9d8fb0691b82d5edaecce`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            vis_1.style.visibility="visible";
            vis_2.style.visibility="visible";
            temp_h.style.visibility="hidden";
            temp.innerHTML = `${arrdata[0].main.temp}°C`;
            vis_2.innerHTML = `${arrdata[0].name},a${arrdata[o].sys.country}`;
            console.log(data);
        }
        catch{
            temp_h.innerHTML = empty;
        }


    }
}

getcurrentday();

submitbtn.addEventListener('click',getInfo);





