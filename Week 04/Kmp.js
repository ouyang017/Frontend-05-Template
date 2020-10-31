function kmp(source,pattren){
    //生成 table 跳转表
    let table = new Array(pattren.length).fill(0);
    {
        //i 为 table 表的下标
        let i = 0, j = 1;

        while(j < pattren.length){
            if(pattren[i] === pattren[j]){
                i++, j++;
                table[j] = i;
            }else{
                if(i >  0)
                    i = table[i];
                else 
                    j++;
            }
        }

        //console.log(table);
    }


    //匹配

    {
        let i=0,j=0;

        while(i < source.length){
            if(pattren[j] === source[i]){
                i++, j++;
            }else{
                if(j >  0)
                    j = table[j];
                else 
                    i++;
            }

            if(j === pattren.length)
                return true;
        }

        return false;

    }
}


console.log(kmp("holxle","ll"));
