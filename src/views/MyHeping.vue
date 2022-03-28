<template>
    <div class="heping">
        <div class="nav-list-box">
              <ul class="list">
            <li class="nav-list-item active">全部</li>
            <li class="nav-list-item">户外</li>
            <li class="nav-list-item">美食</li>
            <li class="nav-list-item">二次元</li>
            <li class="nav-list-item">音乐</li>
        </ul>
        <div class="box-list">
          
             <div class="item" v-for="(item,index) in arrs" :key="index">
                 <div>
                       <img :src="item.imgsrc" alt="">
                 </div>   
                 <p class="title">{{item.title}}</p>
                <div class="info">
                      <span class="nick">{{item.nick}}</span>
                </div>
            </div>
        </div>
        </div>
       
    
    </div>
</template>
<script>
import instance from  "@/api/index"
export default {
    name:"MyHeping",
    components:{},
    data(){
        return {
            arrs:null
        }
    },
    methods:{
        async getData(){
            let {data} = await instance.get("/juedi");
            this.arrs = data;
        }
    },
    created(){
        this.getData();
    },
}
</script>
<style scoped>
.nav-list-box{
    padding:10px 50px 0px 10px;
}
    .list{
        display: flex;
        list-style: none;
        justify-content:space-around;
        height: 24px;
        padding: 0 12px;
        line-height: 24px;
      
    }
     li.nav-list-item{
        font-size:12px;
        border-radius:20px;
      
    }
    .nav-list-item.active{
      border:1px solid #ffa900;
      color: #ffa900;
      height:0.4rem;
    padding: 0 0.15rem;
    }
    .box-list{
        width:5.8rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    img{
        width:2.76rem;
    }
    .title{
        font-size:12px;
    }
    .info{
        display: flex;
        justify-content: space-between;
        color: #999;
    }
    .nick{
        font-size:11px;
        text-overflow:ellipsis;
        overflow: hidden;
    }
  
</style>