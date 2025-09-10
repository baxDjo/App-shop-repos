import { useMemo, useState } from "react";
import { products } from "../data";
import Modal from "./Modal";
import Header from "./Header";

function ProductCard() {
  const [items, setItems] = useState(products);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const onDelete = (id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const onBuy = (product: any) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((p) => p.name.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <>
      
      <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Header query={query} onQueryChange={setQuery} />
        </div>
      </div>

    
      <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredItems.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200 border border-base-200"
            >
              <figure className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 badge badge-primary font-semibold">
                  {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(product.price)}
                </div>
              </figure>

              <div className="card-body">
                <h2 className="card-title leading-tight">{product.name}</h2>
                <p className="text-sm opacity-80 line-clamp-2">{product.description}</p>

                <div className="card-actions mt-2 justify-between">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onBuy(product)}
                  >
                    Acheter
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onDelete(product.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center opacity-70">
            Aucun produit ne correspond au filtre.
          </div>
        )}
      </div>

      {/* Modal global */}
      <Modal open={open} onClose={() => setOpen(false)} title={selectedProduct?.name ?? "Produit"}>
        {selectedProduct && (
          <div className="grid grid-cols-1 sm:grid-cols-[180px,1fr] gap-6">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-44 object-cover rounded-xl"
            />
            <div>
              <p className="opacity-80">{selectedProduct.description}</p>
              <p className="mt-4 text-lg font-semibold">
                {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(selectedProduct.price)}
              </p>
              <div className="mt-4 flex gap-3">
                <button className="btn btn-primary">Ajouter au panier</button>
                <button className="btn" onClick={() => setOpen(false)}>Fermer</button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ProductCard;
