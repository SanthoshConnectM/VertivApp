export function getActiveRate(data:any){
    let healthySite :any = 0;
    if(data != undefined && data.length != 0){
        data.map((item:any) => {
            if(item.tagStatus == "RTU Running"){
                healthySite = healthySite + 1
            }
        })
    }else{
        return 'N/A'
    }
    return Math.round((healthySite / data.length) * 100)
}

export function getHealthySites(data:any) {
    let healthySite :any = 0;
    if(data != undefined && data.length != 0){
        data.map((item:any) => {
            if(item.tagStatus == "RTU Running"){
                healthySite = healthySite + 1
            }
        })
    }else{
        return 'N/A'
    }
    return healthySite;
}

export function getFaultySites(data:any){
    let healthySite :any = 0;
    if(data != undefined && data.length != 0){
        data.map((item:any) => {
            if(item.tagStatus == "RTU Running"){
                healthySite = healthySite + 1
            }
        })
    }else{
        return 'N/A'
    }
    return data.length - healthySite;
}
