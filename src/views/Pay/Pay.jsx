import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import "./index.scss";

const Pay = ({ data }) => {
  const { payId } = useParams();
  const selectedProduct = data.find((product) => product.id == payId);

  return (
    <div>
      <Header />
      <div className="pay-detail">
        <div className="pay-detail__left-side">
          <form className="pay-detail__form">
            <div className="pay-detail__input-wrapper">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                placeholder="Nome completo"
                id="name"
                className="pay-detail__input-name"
              />
              <label htmlFor="entrega">Endereço de entrega:</label>
              <input
                type="text"
                id="entrega"
                placeholder="Endereço de entrega"
              />
            </div>

            <div className="pay-detail__format">
              <h2>Forma de Pagamento:</h2>
              <div className="pay-detail__pix">
                <input type="checkbox" id="pix" name="format" />
                <label htmlFor="pix">Pix</label>
              </div>
              <div className="pay-detail__boleto">
                <input type="checkbox" id="boleto" name="format" />
                <label htmlFor="boleto">Boleto</label>
              </div>
              <div className="pay-detail__credit-card">
                <input type="checkbox" id="credit-card" name="format" />
                <label htmlFor="credit-card">Cartão de Crédito</label>
              </div>
            </div>

            <button type="submit">
              <Link to={"/home"}>Enviar Pedido</Link>
            </button>
          </form>
        </div>
        <div className="pay-detail__right-side">
          <h1>Resumo do Pedido:</h1>
          <div className="pay-detail__product-price">
            <div className="pay-detail__description">Produtos (1):</div>
            <h1>{selectedProduct.price}</h1>
          </div>
          <div className="pay-detail__product-total">
            <div className="pay-detail__description">Total:</div>
            <h1>{selectedProduct.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;