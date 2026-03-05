import { memo } from 'react';
import {useState} from 'react';
import Card from './Card.jsx';

const Hero = () => {
    const[title,setTitle] = useState('');
    const[description,setDescription] =useState('');
    const [task,setTask] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        /*console.log(title,description);*/
        const copyTask =[...task];
        copyTask.push({title,description})
        setTask(copyTask);

        setTitle('');
        setDescription('');
    }

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="md:h-screen w-full sm:w-1/2  flex items-start justify-center sm:border-r border-gray-600">
        <div className="text-3xl w-full">
          
          <h1 className="text-5xl px-10 py-24">Enter Notes</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full px-30 py-10">           
              <input onChange={(e) => {setTitle(e.target.value)}} value={title} className=" w-full p-5 border-2 border-amber-50 rounded"type="text" placeholder="Enter Title Here"></input>
              <textarea onChange={(e) => {setDescription(e.target.value)}} value={description} className="w-full p-5 border-2 border-amber-50 rounded"type="text" placeholder="Enter Description Here"></textarea>
              <button type="submit" className="w-full bg-amber-50 text-black p-2 border-2 active:scale-95 rounded" >Submit</button>         
          </form>

        </div>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <h1 className="text-5xl px-10 py-20">Your Notes</h1>
        <Card task={task} setTask={setTask}/>
      </div>

    </div>
  );
};

export default memo(Hero);