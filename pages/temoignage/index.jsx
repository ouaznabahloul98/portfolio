import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { updateTemoignage } from '@/reduxStore/temoignageSlice';
import styles from '@/styles/Temoignage.module.css';

export default function Temoignages() {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const temoignages = useSelector((state) => state.temoignage.temoignages);

  const [editingId, setEditingId] = useState(null);
  const [editNom, setEditNom] = useState('');
  const [editMessage, setEditMessage] = useState('');

  // 🔐 Redirection si non connecté
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser]);

  if (!currentUser) return null;

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleEdit = (temoin) => {
    setEditingId(temoin.id);
    setEditNom(temoin.nom);
    setEditMessage(temoin.message);
  };

  const handleConfirm = () => {
    dispatch(updateTemoignage({ id: editingId, nom: editNom, message: editMessage }));
    setEditingId(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tous les témoignages</h1>
      <button onClick={() => handleNavigation('/temoignage/ajouter')} className={styles.addBtn}>
        Ajouter un témoignage
      </button>

      {temoignages.length === 0 ? (
        <p>Aucun témoignage</p>
      ) : (
        <ul className={styles.list}>
          {temoignages.map((temoin) => (
            <li key={temoin.id} className={styles.item}>
              {editingId === temoin.id ? (
                <>
                  <input
                    type="text"
                    value={editNom}
                    onChange={(e) => setEditNom(e.target.value)}
                    className={styles.input}
                  />
                  <textarea
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                    className={styles.textarea}
                  />
                  <button onClick={handleConfirm} className={styles.confirmBtn}>Confirmer</button>
                </>
              ) : (
                <>
                  <strong>{temoin.nom}</strong>
                  <p>{temoin.message}</p>
                  <button onClick={() => handleEdit(temoin)} className={styles.editBtn}>Modifier</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
