
export const urlGenerator=(body,training,equip,duration,min,max,title,page)=>{
      let url = `https://fithub.onrender.com/products?category=workout&page=${page}&limit=20`;
           if (body && training && equip && duration && min) {
                  url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&calories=${min}-${max}&&time=${duration}&&limit=20`;
           }else if (body && training && equip && duration) {
            url = `https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&time=${duration}&&limit=20&&page=${page}`;
          }else if (body && training && equip && min) {
            url = `https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&calories=${min}-${max}&&limit=20&&page=${page}`;
          }else if (body && training  && min&& duration) {
            url = `https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}&&calories=${min}-${max}&&time=${duration}&&limit=20&&page=${page}`;
          }else if (body && equip && min&& duration) {
            url = `https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&equipment=${equip}&&calories=${min}-${max}&&time=${duration}&&limit=20&&page=${page}`;
          }else if (training && equip && duration && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&trainingtype=${training}&&equipment=${equip}&&calories=${min}-${max}&&time=${duration}&&limit=20`;
          }else if (body && training && equip) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&limit=20`;
          }else if (body && training  && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&trainingtype=${training}&&calories=${min}-${max}&&limit=20`;
          }else if (body && training && duration ) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&trainingtype=${training}&&&&time=${duration}&&limit=20`;
          }else if (body && duration && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&calories=${min}-${max}&&time=${duration}&&limit=20`;
          }else if (body &&equip && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&equipment=${equip}&&calories=${min}-${max}&&limit=20`;
          }else if (body  && equip && duration ) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&equipment=${equip}&&time=${duration}&&limit=20`;
          }else if (equip && duration && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&equipment=${equip}&&calories=${min}-${max}&&time=${duration}&&limit=20`;
          }else if (body && training) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&trainingtype=${training}&&limit=20`;
          }else if (body && equip) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&equipment=${equip}&&limit=20`;
          }else if (body && duration ) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&time=${duration}&&limit=20`;
          }else if (body && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&calories=${min}-${max}&&limit=20`;
          }else if (training && equip) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&trainingtype=${training}&&equipment=${equip}&&limit=20`;
          }else if (training && duration ) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&trainingtype=${training}&&time=${duration}&&limit=20`;
          }else if (training && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&trainingtype=${training}&&calories=${min}-${max}&&limit=20`;
          }else if ( equip && duration ) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&equipment=${equip}&&time=${duration}&&limit=20`;
          }else if ( equip && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&equipment=${equip}&&calories=${min}-${max}&&limit=20`;
          }else if (duration && min) {
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&calories=${min}-${max}&&time=${duration}&&limit=20`;
          }else if(body){
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&bodyfocus=${body}&&limit=20`;          
          }else if(training){
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&trainingtype=${training}&&limit=20`;          
          }else if(equip){
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&equipment=${equip}&&limit=20`;          
          }else if(duration){
            url = `https://fithub.onrender.com/products?category=workout&&time=${duration}`;          
          }else if(min){
            url = `https://fithub.onrender.com/products?page=${page}&&category=workout&&calories=${min}-${max}&&limit=20`;          
          }

          return url
}