import React from 'react';
import "./appStyles.css";
import styles from "./appStyles.css";


function CssModules() {
  return (
      <div>
        <h2>3. CSS Modules</h2>
        <h3 className='error'>Error</h3>
        <h3 className={styles.success}>Success</h3>
      </div>
  )
}

export default CssModules;