/* ... (mantén todo lo anterior hasta .wish-box) ... */

/* Prayer boxes */
.prayer-boxes {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.prayer-box {
  background: rgba(255,255,255,0.08);
  border: 1px solid #a8e6cf;
  border-radius: 16px;
  padding: 1rem;
  width: 280px;
  backdrop-filter: blur(4px);
}
.prayer-box .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #ffd1dc;
}
.toggle-visibility {
  background: none; border: none; color: #ffd1dc; font-size: 1.2rem; cursor: pointer;
}
.prayer-box textarea {
  width: 100%; height: 70px; padding: 0.75rem;
  background: rgba(0,0,0,0.3); color: #fff; border: 1px dashed #0f0;
  border-radius: 10px; resize: none; font-family: inherit;
}
.prayer-box textarea.hidden {
  color: transparent; text-shadow: 0 0 8px #0f0;
}
.prayer-box button {
  width: 100%; margin-top: 0.5rem; padding: 0.6rem;
  background: linear-gradient(45deg, #0f0, #0ff); color: #000;
  border: none; border-radius: 20px; font-weight: bold; cursor: pointer;
}
.prayer-box .privacy {
  font-size: 0.65rem; color: #a8e6cf; text-align: center; margin-top: 0.5rem; opacity: 0.8;
}

/* Spark animation */
@keyframes sparkFade {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-100px) scale(0); }
}
.spark {
  position: absolute; width: 4px; height: 4px; border-radius: 50%;
  pointer-events: none; animation: sparkFade 1.5s forwards;
}
.spark.green { background: #0f0; box-shadow: 0 0 8px #0f0; }
.spark.blue { background: #0ff; box-shadow: 0 0 8px #0ff; }
