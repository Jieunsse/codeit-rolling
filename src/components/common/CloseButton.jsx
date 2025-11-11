import closeIcon from '@components/common/assets/close.svg';

function CloseButton({ onClick }) {
  return(
    <button 
      type='button'
      onClick={onClick}
    >
      <img src={closeIcon}/>
    </button>
  );
}

export default CloseButton;