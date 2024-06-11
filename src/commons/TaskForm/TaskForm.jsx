import { useState } from 'react';
import './TaskForm.css'
import { createTask } from '../../services/apiCalls';


export const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const postTask = async () => {
        
        const result = await createTask({ title, description, isCompleted });
    }

    return (
        <form >
            <input
                className='input-form'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                className='input-text-area'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <label>
                Completed:
                <input
                    className='checkbox'
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
            </label>
            <button type="submit" className='btn'
             onClick={postTask}
             >
                Save Task
            </button>
        </form>
    );
}

export default TaskForm;
