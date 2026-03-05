import { memo } from 'react';

const Card = ({ task,setTask }) => {

  const handleDelete = (idx) =>{
   const prev=[...task]; 
   prev.splice(idx,1);
   setTask(prev);
  }

  return (
    <div className="grid grid-cols-2 px-5 py-5 justify-center items-start gap-5 ">
      {task.map((t, index) => (
        <div key={index} className="flex flex-col gap-10 mt-5 p-4 w-auto items-start  border-2 text-black rounded-2xl  bg-amber-100 ">
        
            <h1 className="font-extrabold text-4xl py-4 break-words text-center font-serif">{t.title}</h1>
            <p className="p-2 text-3xl break-words text-center">{t.description}</p>   

            <button onClick={()=>handleDelete(index)} className="bg-red-600 w-full px-2 rounded-3xl py-3 active:scale-95 text-3xl font-bold text-amber-50">Delete</button>       
        </div>
      ))}
    </div>
  );
};

export default memo(Card);