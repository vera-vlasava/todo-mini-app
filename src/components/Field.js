const Field = ({ label, id, error, ...rest }) => (
  <>
    <div className="input-group">
      <input className="form-control" id={id} placeholder={label} {...rest} />
      <button className="btn btn-success">Add</button>
    </div>
    {error && <p className="text-danger px-3"><small>{error}</small></p>}
  </>
);

export default Field;
