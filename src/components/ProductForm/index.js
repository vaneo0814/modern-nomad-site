import { useReducer } from 'react';
import styles from './productForm.module.css';

const ProductForm = ({ product }) => {
  const initState = {
    name: '',
    email: '',
    subject: '',
    body: '',
    status: 'IDLE',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.payload };
      case 'email':
        return { ...state, email: action.payload };
      case 'body':
        return { ...state, body: action.payload };
      case 'updateStatus':
        return { ...state, status: action.payload };
      case 'reset':
      default:
        return initState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const setStatus = (status) =>
    dispatch({ type: 'updateStatus', payload: status });

  const updateFieldValue = (fieldName) => (event) =>
    dispatch({ type: fieldName, payload: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('SENDING');
      
        fetch('/api/product-inquiry', {
          method: 'POST',
          body: JSON.stringify({
            ...state,
            body: `
      From: ${state.name}<br/>
      Email: ${state.email}
      Message: ${state.message}
          `,
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            setStatus('SENT');
          })
          .catch((err) => {
            console.log(err);
            setStatus('ERROR');
          });
      };

  return (
    <div>
      {state.status === 'SENT' ? (
        <>
          <h4>Message sent!</h4>
          <button
            className={styles['form-btn']}
            type="reset"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset Form
          </button>
        </>
      ) : (
        <form className={styles['form']} onSubmit={handleSubmit}>
          <h3>Questions or Concerns? Send us a message</h3>
          <label className={styles['form-label']}>
            Name
            <input
              type="text"
              value={state.name}
              onChange={updateFieldValue('name')}
              className={styles['form-input']}
            />
          </label>
          <label className={styles['form-label']}>
            Email
            <input
              type="email"
              value={state.email}
              onChange={updateFieldValue('email')}
              className={styles['form-input']}
            />
          </label>
          <label className={styles['form-label']}>
            Message
            <textarea
              type="text"
              value={state.message}
              onChange={updateFieldValue('message')}
              className={styles['message-input']}
              required
            />
          </label>

          <button
            className={styles['form-btn']}
            disabled={state.status === 'SENDING'}
          >
            {state.status !== 'SENDING' ? 'Send' : 'Sending...'}
          </button>
          {state.status === 'ERROR' && <div>ERROR!</div>}
        </form>
      )}
    </div>
  );
};

export default ProductForm;