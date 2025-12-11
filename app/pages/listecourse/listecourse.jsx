import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Plus, X } from 'lucide-react';
import "./listecourse.css"

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