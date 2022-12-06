
export const AddProductForm = () => {
  <form className="form">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="product name"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>Grocery</option>
                  <option>Drinks</option>
                  <option>Fruits</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
};
