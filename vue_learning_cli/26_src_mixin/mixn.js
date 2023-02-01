export const mixN = {
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
//混合中配置数据，如果原来没有但是混合有，就用混合里面的，如果原来data里面有数据，则优先使用data的
