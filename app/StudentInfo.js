import Link from 'next/link';


function StudentInfo(props){
  return (
    <div>
      <p>Ryan Back</p>
      <p>CPRG 306 </p>
      <p>
        <Link href="https://github.com/ho0405">GitHub Repository</Link>
      </p>
    </div>
  );
};

export default StudentInfo;

