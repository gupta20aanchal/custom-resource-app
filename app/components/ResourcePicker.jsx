import { useState } from "react";

export default function ResourcePicker({ data }) {
  const [open, setOpen] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);

  const toggleSelect = (item, setter, list) => {
    setter(
      list.some((i) => i.id === item.id)
        ? list.filter((i) => i.id !== item.id)
        : [...list, item]
    );
  };

  const renderModal = (items, selected, setter) => (
    <div style={modalStyle}>
      <h3>Select items</h3>
      {items.map((item) => (
        <label key={item.id} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selected.some((i) => i.id === item.id)}
            onChange={() => toggleSelect(item, setter, selected)}
          />
          {item.title}
        </label>
      ))}
      <button onClick={() => setOpen(null)}>Close</button>
    </div>
  );

  return (
    <div>
      <h2>Custom Resource Picker</h2>

      <button onClick={() => setOpen("products")}>Pick Products</button>
      <button onClick={() => setOpen("variants")}>Pick Variants</button>
      <button onClick={() => setOpen("collections")}>Pick Collections</button>

      {open === "products" &&
        renderModal(data.products, selectedProducts, setSelectedProducts)}

      {open === "variants" &&
        renderModal(data.variants, selectedVariants, setSelectedVariants)}

      {open === "collections" &&
        renderModal(
          data.collections,
          selectedCollections,
          setSelectedCollections
        )}

      <hr />

      <h3>Selected Products</h3>
      <ul>
        {selectedProducts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <h3>Selected Variants</h3>
      <ul>
        {selectedVariants.map((v) => (
          <li key={v.id}>{v.title}</li>
        ))}
      </ul>

      <h3>Selected Collections</h3>
      <ul>
        {selectedCollections.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#fff",
  padding: "20px",
  border: "1px solid #ccc",
  zIndex: 1000,
};
