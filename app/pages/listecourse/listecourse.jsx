import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Plus, X } from 'lucide-react';

export default function PageListeCourse() {
  const [selectedStore, setSelectedStore] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: 'Lait', checked: false },
    { id: 2, name: 'Oeufs', checked: false },
    { id: 3, name: 'Farine', checked: false },
    { id: 4, name: 'Pain', checked: false },
    { id: 5, name: 'Fromage', checked: false }
  ]);
  const [newItem, setNewItem] = useState('');

  const stores = [
    { id: 1, name: 'Auchan', icon: '🛒' },
    { id: 2, name: 'Leclerc', icon: '🏪' },
    { id: 3, name: 'Carrefour', icon: '🛍️' },
    { id: 4, name: 'Intermarché', icon: '🏬' },
    { id: 5, name: 'Casino', icon: '🎰' },
    { id: 6, name: 'Monoprix', icon: '🏢' }
  ];

  const categories = [
    { icon: '🥬', label: 'Fruits & Légumes' },
    { icon: '🥖', label: 'Boulangerie' },
    { icon: '🍷', label: 'Boissons' },
    { icon: '🧀', label: 'Produits laitiers' },
    { icon: '🥩', label: 'Viandes' },
    { icon: '🍸', label: 'Alcools' }
  ];

  const toggleItem = (id) => {
    setShoppingList(shoppingList.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (newItem.trim()) {
      setShoppingList([...shoppingList, { 
        id: Date.now(), 
        name: newItem, 
        checked: false 
      }]);
      setNewItem('');
    }
  };

  const removeItem = (id) => {
    setShoppingList(shoppingList.filter(item => item.id !== id));
  };

  const handleValidate = () => {
    if (!selectedStore) {
      alert('Veuillez sélectionner un magasin');
      return;
    }
    console.log('Magasin:', selectedStore);
    console.log('Liste:', shoppingList);
    // Navigation vers l'itinéraire optimisé
  };

  return (
    <>
      <style>{`
        .shopping-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #7FD6A9 0%, #6BC896 100%);
          padding-bottom: 20px;
        }

        .header {
          background: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo {
          width: 50px;
          height: 50px;
          background: #ff6b4a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: bold;
          color: #ff6b4a;
        }

        .menu-icon {
          cursor: pointer;
          color: #7FD6A9;
        }

        .page-title {
          text-align: center;
          padding: 20px;
          font-size: 24px;
          font-weight: bold;
          color: white;
        }

        .categories-scroll {
          display: flex;
          gap: 15px;
          padding: 15px 20px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .categories-scroll::-webkit-scrollbar {
          display: none;
        }

        .category-item {
          min-width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .category-item:hover {
          transform: scale(1.05);
        }

        .category-icon {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .category-label {
          font-size: 11px;
          color: white;
          text-align: center;
        }

        .content {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .section {
          background: white;
          border-radius: 15px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #333;
        }

        .store-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 10px;
        }

        .store-card {
          padding: 15px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .store-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .store-card.selected {
          border-color: #7FD6A9;
          background: #f0fdf8;
        }

        .store-icon {
          font-size: 32px;
          margin-bottom: 5px;
        }

        .store-name {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          margin-bottom: 15px;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
        }

        .add-item-box {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        .add-input {
          flex: 1;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
        }

        .add-input:focus {
          border-color: #7FD6A9;
        }

        .add-button {
          padding: 12px 20px;
          background: #7FD6A9;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .add-button:hover {
          background: #6BC896;
        }

        .shopping-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.2s;
        }

        .list-item:hover {
          background: #e9ecef;
        }

        .list-item.checked {
          opacity: 0.6;
          text-decoration: line-through;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .checkbox {
          width: 22px;
          height: 22px;
          border: 2px solid #7FD6A9;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
        }

        .checkbox.checked {
          background: #7FD6A9;
        }

        .item-name {
          font-size: 16px;
          color: #333;
        }

        .delete-btn {
          padding: 5px;
          background: #ff6b4a;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .delete-btn:hover {
          background: #e05538;
        }

        .validate-button {
          width: 100%;
          padding: 16px;
          background: #ff6b4a;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.2s;
        }

        .validate-button:hover {
          background: #e05538;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 74, 0.3);
        }

        .validate-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .store-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 480px) {
          .content {
            padding: 15px;
          }

          .section {
            padding: 15px;
          }

          .page-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="shopping-page">
       

        {/* Categories */}
        <div className="categories-scroll">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <div className="category-icon">{cat.icon}</div>
              <div className="category-label">{cat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="content">
          {/* Store Selection */}
          <div className="section">
            <div className="section-title">Choisissez votre magasin</div>
            <div className="store-grid">
              {stores.map(store => (
                <div
                  key={store.id}
                  className={`store-card ${selectedStore === store.name ? 'selected' : ''}`}
                  onClick={() => setSelectedStore(store.name)}
                >
                  <div className="store-icon">{store.icon}</div>
                  <div className="store-name">{store.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping List */}
          <div className="section">
            <div className="section-title">Ma liste de courses</div>
            
            <div className="add-item-box">
              <input
                type="text"
                className="add-input"
                placeholder="Ajouter un article..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addItem()}
              />
              <button className="add-button" onClick={addItem}>
                <Plus size={20} />
              </button>
            </div>

            <div className="shopping-list">
              {shoppingList.map(item => (
                <div key={item.id} className={`list-item ${item.checked ? 'checked' : ''}`}>
                  <div className="item-left">
                    <div 
                      className={`checkbox ${item.checked ? 'checked' : ''}`}
                      onClick={() => toggleItem(item.id)}
                    >
                      {item.checked && <span style={{color: 'white', fontSize: '16px'}}>✓</span>}
                    </div>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <button className="delete-btn" onClick={() => removeItem(item.id)}>
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="validate-button" onClick={handleValidate}>
            Valider
          </button>
        </div>
      </div>
    </>
  );
}