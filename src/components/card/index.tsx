import './index.css';

interface IProps {
    name: string;
    title: string;
    href?: string; 
    notify?: () => void;
}

const Card: React.FC<IProps> = ({
    name,
    title,
    href,
    notify
}) => {
  return (
    <a onClick={notify} href={href} className='card'>
        <i className={`bx bx-md ${name}`} ></i>
        <p className='title'> {title}</p>
    </a>
  )
}

export default Card