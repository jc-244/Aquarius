%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaW1lIHNoaWZ0aW5nIGlzIGJlc3QgbGVhcm5lZCBieSB3YXRjaGluZyBhIHNpZ25hbCBzbGlkZSByaWdodCBhcyBcXCh0XzBcXCkgY2hhbmdlcyB3aGlsZSBpdHMgc2hhcGUgc3RheXMgdW5jaGFuZ2VkLiBUaGUgdGV4dGJvb2sncyBGaWd1cmUgNC40IGlzIGFsc28gdXNlZnVsIGJlY2F1c2UgaXQgc2hvd3MgdGhlIGV4YW0tZmFjaW5nIHRhc2sgb2YgYnJlYWtpbmcgYSBwaWVjZXdpc2Ugc2lnbmFsIGludG8gZGVsYXllZCBjb21wb25lbnRzLiBObyBnZW5lcmF0ZWQgaW1hZ2UgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGNvbmNlcHQgaXMgYmV0dGVyIHNlcnZlZCBieSBhbiBpbnRlcmFjdGl2ZSBzaWduYWwgZGVtbyBhbmQgdGhlIGV4aXN0aW5nIHRleHRib29rIGZpZ3VyZS4iLCJjcmFtIjoiVXNlIHRoZSBkZW1vIHRvIG1lbW9yaXplIHRoZSBleGFtIHRyaWdnZXI6IHJpZ2h0IHNoaWZ0IGJ5IFxcKHRfMFxcKSBtZWFucyBtdWx0aXBseSBieSBcXChlXnstcyB0XzB9XFwpLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIGFuZCBGaWd1cmUgNC40IHRvIGNvbm5lY3QgdGhlIGZvcm11bGEsIHRoZSBkZWxheWVkIHdhdmVmb3JtLCBhbmQgb25lIHJlcHJlc2VudGF0aXZlIHBpZWNld2lzZS1zaWduYWwgZXhhbXBsZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbHMgdG8gY2F0Y2ggdHJhcHM6IG1pc3NpbmcgXFwodSh0LXRfMClcXCksIHVzaW5nIG5lZ2F0aXZlIGRlbGF5IGluIHVuaWxhdGVyYWwgdHJhbnNmb3JtcywgYW5kIGZhaWxpbmcgdG8gcmV3cml0ZSB0ZXJtcyBhcyBmdW5jdGlvbnMgb2YgXFwodC10XzBcXCkuIn0=" style="display:none;"></div>%%KC_END%%
# Time Shifting

> **Section Objective:** Use the Laplace time-shifting property to transform delayed signals and recognize delay factors in \(X(s)\).

## Concepts In This Section

- time-shifting property
- unit-step delay form
- delayed piecewise signals
- inverse Laplace delay recognition

## 1. Time Delay in the Laplace Domain

Delaying a causal signal by \(t_0\) seconds slides the entire waveform to the right on the time axis — but the shape stays exactly the same. Nothing about the signal's amplitude or profile changes; it simply starts later.

On the transform side, this right shift produces a clean pattern: the Laplace transform of the delayed signal equals the original transform multiplied by the exponential factor \(e^{-s t_0}\).

### EXAM TRIGGER

Whenever you see \(e^{-s t_0}\) (or a specific form like \(e^{-2s}\), \(e^{-3s}\)) in a Laplace expression, your first instinct should be: **this is a time delay**. This is one of the fastest properties to spot on an exam.

$$x(t-t_0)\Longleftrightarrow X(s)e^{-st_0},\quad t_0\ge 0$$
***Textbook Eq. (4.12) — the time-shifting property.**

- \(x(t)\) is the original signal with Laplace transform \(X(s)\).
- \(t_0 \ge 0\) is the delay amount in seconds.
- \(e^{-s t_0}\) is the transform-domain delay marker — it multiplies the original transform.

**When to use it:** whenever a known signal is shifted right by \(t_0\) seconds.

**Exam trigger:** seeing \(x(t-a)\) in the time domain, or \(e^{-as}\) in the \(s\)-domain.

**Common misuse:** applying the formula without verifying the signal is causal, or forgetting that the delayed signal starts at \(t = t_0\), not at \(t = 0\).*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTW92ZSB0aGUgc2xpZGVyIHRvIG1hdGNoIFxcKGVeey0yc31cXCksIFxcKGVeey0zc31cXCksIGFuZCBzaW1pbGFyIGV4YW0gcGF0dGVybnMgcXVpY2tseS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgc2xpZGVyIHRvIGNvbm5lY3QgdGhlIHJpZ2h0IHNoaWZ0IGluIHRpbWUgd2l0aCBtdWx0aXBsaWNhdGlvbiBieSBcXChlXnstcyB0XzB9XFwpLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgc2xpZGVyIHRvIG5vdGljZSB0aGF0IHRoZSB1bml0IHN0ZXAgbXVzdCBtb3ZlIHdpdGggdGhlIHNpZ25hbCwgbm90IHN0YXkgYXQgXFwodSh0KVxcKS4ifQ==" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRpdGxlIjoiU2xpZGUgdGhlIHNpZ25hbCBhbmQgd2F0Y2ggdGhlIExhcGxhY2UgZGVsYXkgZmFjdG9yIiwidGVhY2hpbmdfcm9sZSI6ImNvbmNlcHRfYW5jaG9yIiwiZGVtb19zcGVjIjp7ImZyYW1ld29yayI6InJlYWN0X2NhbnZhcyIsInBhbmVscyI6W3siaWQiOiJvcmlnaW5hbCIsImxhYmVsIjoiT3JpZ2luYWwgc2lnbmFsIFxcKHgodCl1KHQpXFwpIiwic2lnbmFsX3R5cGUiOiJyYW1wX3B1bHNlIiwiYXhlcyI6eyJ4X2xhYmVsIjoidCAocykiLCJ5X2xhYmVsIjoieCh0KSIsInhfcmFuZ2UiOlswLDZdLCJ5X3JhbmdlIjpbMCwyXX19LHsiaWQiOiJkZWxheWVkIiwibGFiZWwiOiJEZWxheWVkIHNpZ25hbCBcXCh4KHQtdF8wKXUodC10XzApXFwpIiwic2lnbmFsX3R5cGUiOiJyYW1wX3B1bHNlX3NoaWZ0ZWQiLCJheGVzIjp7InhfbGFiZWwiOiJ0IChzKSIsInlfbGFiZWwiOiJ4KHQtdOKCgCkiLCJ4X3JhbmdlIjpbMCw2XSwieV9yYW5nZSI6WzAsMl19fV0sInNsaWRlciI6eyJ2YXJpYWJsZSI6InRfMCIsImxhYmVsIjoiRGVsYXkgXFwodF8wXFwpIChzZWNvbmRzKSIsIm1pbiI6MCwibWF4Ijo0LCJzdGVwIjowLjUsImRlZmF1bHQiOjB9LCJkeW5hbWljX2Rpc3BsYXkiOnsibGFiZWwiOiJUcmFuc2Zvcm0gbXVsdGlwbGllciIsInRlbXBsYXRlIjoidF8wID0ge3RfMH0gXFxSaWdodGFycm93IGVeey17dF8wfXN9IiwiZXhhbXBsZV92YWx1ZXMiOlswLDEsMiwzLDRdfSwic3R5bGUiOiJjbGVhbl9hY2FkZW1pY19heGVzX29ubHkifSwid2hhdF90b19ub3RpY2UiOlsiVGhlIHdhdmVmb3JtIHNoYXBlIGlzIGNvbXBsZXRlbHkgdW5jaGFuZ2VkIOKAlCBvbmx5IGl0cyBwb3NpdGlvbiBvbiB0aGUgdGltZSBheGlzIG1vdmVzLiIsIlRoZSBzdGFydCB0aW1lIG9mIHRoZSBkZWxheWVkIHNpZ25hbCBtb3ZlcyB0byBcXCh0ID0gdF8wXFwpIGFzIHRoZSBzbGlkZXIgaW5jcmVhc2VzLiIsIlRoZSBMYXBsYWNlIHRyYW5zZm9ybSBnYWlucyB0aGUgZmFjdG9yIFxcKGVeey1zIHRfMH1cXCkg4oCUIGZvciBleGFtcGxlLCBhIDItc2Vjb25kIGRlbGF5IGdpdmVzIFxcKGVeey0yc31cXCkuIl0sIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiTW92ZSB0aGUgc2xpZGVyIHRvIG1hdGNoIFxcKGVeey0yc31cXCksIFxcKGVeey0zc31cXCksIGFuZCBzaW1pbGFyIGV4YW0gcGF0dGVybnMgcXVpY2tseS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgc2xpZGVyIHRvIGNvbm5lY3QgdGhlIHJpZ2h0IHNoaWZ0IGluIHRpbWUgd2l0aCBtdWx0aXBsaWNhdGlvbiBieSBcXChlXnstcyB0XzB9XFwpLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgc2xpZGVyIHRvIG5vdGljZSB0aGF0IHRoZSB1bml0IHN0ZXAgbXVzdCBtb3ZlIHdpdGggdGhlIHNpZ25hbCwgbm90IHN0YXkgYXQgXFwodSh0KVxcKS4ifX0="></div>%%KC_END%%

## 2. The Safe Unilateral Form

This is the preferred form when working with the **unilateral Laplace transform**, because it makes causality explicit.

- \(u(t-t_0)\) is the unit step that switches the delayed signal **on at exactly \(t = t_0\)**. Before that moment, the signal is zero.
- The condition \(t_0 \ge 0\) is essential: the unilateral transform assumes all signals are causal (starting at or after \(t = 0\)).

**When to use it:** whenever a delayed signal is written in explicit time-domain form.

**Exam trigger:** seeing \(u(t-a)\) next to a shifted expression.

**Common misuse:** writing \(x(t-t_0)\,u(t)\) instead of \(x(t-t_0)\,u(t-t_0)\). The unit step must shift with the signal.

#### Minimal Example

Since \(t\,u(t) \Longleftrightarrow \dfrac{1}{s^2}\), the time-shifting property gives:

$$(t-2)\,u(t-2)\Longleftrightarrow \frac{e^{-2s}}{s^2}$$

$$x(t-t_0)\,u(t-t_0)\Longleftrightarrow X(s)\,e^{-st_0},\quad t_0\ge 0$$

## 3. Rewriting Terms Before Shifting

Before applying the time-shifting property, the expression multiplying \(u(t-t_0)\) **must be written as a function of \((t - t_0)\)**, not just any expression in \(t\).

### THE TRAP

Consider \((t-1)\,u(t-2)\). The step turns on at \(t = 2\), so the delay is \(t_0 = 2\). But the expression beside the step is \((t-1)\), not \((t-2)\). This mismatch means the formula **cannot be applied directly**.

### THE FIX

Rewrite the expression using the shifted variable \(t - 2\):

$$(t-1)\,u(t-2) = \bigl((t-2)+1\bigr)\,u(t-2)$$

This separates into a **delayed ramp** \((t-2)\,u(t-2)\) plus a **delayed step** \(u(t-2)\), each of which can be transformed directly.

### EXAM RULE

> **Step 1:** Identify the step time \(t_0\) from \(u(t - t_0)\).
> **Step 2:** Rewrite the entire expression beside the step using \((t - t_0)\) as the variable.
> **Step 3:** Apply the transform table to each resulting term.


## 4. Inverse Laplace Delay Recognition

This is the inverse-use pattern illustrated in **Example 4.7**.

When \(X(s)\) contains multiple terms, handle them separately:

- **Terms without an exponential factor** (like \(X_1(s)\)) invert normally to \(x_1(t)\).
- **Terms multiplied by \(e^{-2s}\)** (like \(X_2(s)\,e^{-2s}\)) invert to the **delayed** version: \(x_2(t-2)\,u(t-2)\).

Here \(X_1(s)\) and \(X_2(s)\) are the partial-fraction or table-ready pieces, and the delay value is \(2\) seconds.

**When to use it:** inverse Laplace problems where only part of \(X(s)\) carries an exponential delay factor.

**Exam trigger:** split terms with and without \(e^{-as}\) before inverting — treat each group independently.

**Common misuse:** applying the delay to the entire expression when only one term contains the exponential factor.

$$X(s)=X_1(s)+X_2(s)\,e^{-2s}\Longleftrightarrow x(t)=x_1(t)+x_2(t-2)\,u(t-2)$$

---
**📌 Key Takeaways**
- **Time-shifting property (Eq. 4.12):** \(x(t-t_0)\Longleftrightarrow X(s)\,e^{-s t_0},\ t_0\ge 0\) — a right shift by \(t_0\) seconds multiplies the transform by \(e^{-s t_0}\).
- **Safe unilateral form:** \(x(t-t_0)\,u(t-t_0)\Longleftrightarrow X(s)\,e^{-s t_0}\) — the unit step must shift with the signal; writing \(u(t)\) instead of \(u(t-t_0)\) is a common and costly error.
- **Delayed terms must be rewritten:** before applying transform tables, express the term beside \(u(t-t_0)\) entirely in terms of \((t-t_0)\); for example, \((t-1)\,u(t-2) = ((t-2)+1)\,u(t-2)\).
- **Inverse Laplace delay recognition:** \(X_1(s)+X_2(s)\,e^{-as}\Longleftrightarrow x_1(t)+x_2(t-a)\,u(t-a)\) — apply the delay only to the term that carries \(e^{-as}\), not to the entire expression.

*Next, we use a similar idea to study frequency shifting in the Laplace transform.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InRpbWVfc2hpZnRfZm9ybXVsYSIsImxhYmVsIjoiVGltZS1zaGlmdGluZyBwcm9wZXJ0eSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoeCh0KVxcTG9uZ2xlZnRyaWdodGFycm93IFgocylcXCksIHdoYXQgZG9lcyBhIGRlbGF5IGJ5IFxcKDNcXCkgc2Vjb25kcyB1c3VhbGx5IHByb2R1Y2UgaW4gdGhlIExhcGxhY2UgZG9tYWluPyIsIm9wdGlvbnMiOlsiQS4gXFwoWChzLTMpXFwpIiwiQi4gXFwoWChzKVxcLGVeey0zc31cXCkiLCJDLiBcXChYKHMpXFwsZV57M3N9XFwpIiwiRC4gXFwoWChzKS8zXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQSByaWdodCBzaGlmdCBieSBcXCh0XzA9M1xcKSBtdWx0aXBsaWVzIHRoZSB0cmFuc2Zvcm0gYnkgXFwoZV57LTNzfVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJSZXBsYWNpbmcgXFwoc1xcKSBieSBcXChzLTNcXCkgaXMgYSBmcmVxdWVuY3ktc2hpZnRpbmcgcGF0dGVybiwgbm90IHRpbWUgZGVsYXkuIiwiQyI6IlRoZSBzaWduIGlzIHdyb25nIGZvciBhIGRlbGF5OyBcXChlXnszc31cXCkgd291bGQgY29ycmVzcG9uZCB0byBhbiBhZHZhbmNlIHBhdHRlcm4sIG5vdCB0aGUgdW5pbGF0ZXJhbCBkZWxheSBwcm9wZXJ0eS4iLCJEIjoiQSBkZWxheSBkb2VzIG5vdCBkaXZpZGUgdGhlIHRyYW5zZm9ybSBieSB0aGUgZGVsYXkgYW1vdW50LiJ9LCJoaW50IjoiQSB0aW1lIGRlbGF5IGNyZWF0ZXMgYW4gZXhwb25lbnRpYWwgbXVsdGlwbGllciBpbiBcXChzXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSW4gdGhlIGludGVyYWN0aXZlIGRlbW8sIHRoZSB3YXZlZm9ybSBzbGlkZXMgcmlnaHQgYnkgXFwoMlxcKSBzZWNvbmRzIGFuZCBrZWVwcyB0aGUgc2FtZSBzaGFwZS4gV2hpY2ggdHJhbnNmb3JtIGZhY3RvciBzaG91bGQgYXBwZWFyPyIsIm9wdGlvbnMiOlsiQS4gXFwoZV57LTJzfVxcKSIsIkIuIFxcKGVeey1zLzJ9XFwpIiwiQy4gXFwoZV57MnN9XFwpIiwiRC4gXFwoMmVeey1zfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkEgcmlnaHQgc2hpZnQgYnkgXFwodF8wPTJcXCkgY29ycmVzcG9uZHMgdG8gbXVsdGlwbGljYXRpb24gYnkgXFwoZV57LXMgdF8wfT1lXnstMnN9XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgd291bGQgbWVhbiBcXCh0XzA9MS8yXFwpLCBub3QgXFwoMlxcKS4iLCJDIjoiVGhlIHNpZ24gaXMgb3Bwb3NpdGUgb2YgdGhlIGRlbGF5IGZhY3Rvci4iLCJEIjoiVGhlIGRlbGF5IGdvZXMgaW5zaWRlIHRoZSBleHBvbmVudGlhbCBhcyBcXChlXnstMnN9XFwpLCBub3QgYXMgYSBzZXBhcmF0ZSBtdWx0aXBsaWVyIFxcKDJlXnstc31cXCkuIn0sImhpbnQiOiJTdWJzdGl0dXRlIFxcKHRfMD0yXFwpIGludG8gXFwoZV57LXMgdF8wfVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZGVtb19vYnNlcnZhdGlvbl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoidW5pdF9zdGVwX2RlbGF5X2Zvcm0iLCJsYWJlbCI6IlNhZmUgdW5pbGF0ZXJhbCBmb3JtIHdpdGggdW5pdCBzdGVwIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCB0aW1lLWRvbWFpbiBzaWduYWwgY29ycmVjdGx5IHJlcHJlc2VudHMgYSBjYXVzYWwgdmVyc2lvbiBvZiBcXCh4KHQpXFwpIGRlbGF5ZWQgYnkgXFwodF8wXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoeCh0LXRfMClcXCx1KHQpXFwpIiwiQi4gXFwoeCh0K3RfMClcXCx1KHQtdF8wKVxcKSIsIkMuIFxcKHgodC10XzApXFwsdSh0LXRfMClcXCkiLCJELiBcXCh4KHQpXFwsdSh0LXRfMClcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJCb3RoIHRoZSBzaWduYWwgZXhwcmVzc2lvbiBhbmQgdGhlIHVuaXQgc3RlcCBtdXN0IHNoaWZ0IGJ5IHRoZSBzYW1lIGFtb3VudCBcXCh0XzBcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHVuaXQgc3RlcCB0dXJucyBvbiBhdCBcXCgwXFwpLCBub3QgYXQgdGhlIGRlbGF5ZWQgc3RhcnQgdGltZSBcXCh0XzBcXCkuIiwiQiI6IlRoZSBleHByZXNzaW9uIFxcKHgodCt0XzApXFwpIGlzIGFuIGFkdmFuY2UsIG5vdCBhIGRlbGF5LiIsIkQiOiJUaGUgc3RlcCBpcyBkZWxheWVkLCBidXQgdGhlIHNpZ25hbCBpdHNlbGYgaGFzIG5vdCBiZWVuIHNoaWZ0ZWQuIn0sImhpbnQiOiJUaGUgd2F2ZWZvcm0gYW5kIGl0cyB0dXJuLW9uIHRpbWUgbXVzdCBtb3ZlIHRvZ2V0aGVyLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ3cm9uZ192c19yaWdodF92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgY2xhc3NtYXRlIHdyaXRlcyBcXCgodC0yKVxcLHUodClcXExvbmdsZWZ0cmlnaHRhcnJvdyBlXnstMnN9L3NeMlxcKS4gRXhwbGFpbiB0aGUgbWlzdGFrZS4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgZmFjdG9yIFxcKGVeey0yc31cXCkgY29ycmVzcG9uZHMgdG8gYSBkZWxheWVkIHJhbXAgXFwoKHQtMilcXCx1KHQtMilcXCksIG5vdCBcXCgodC0yKVxcLHUodClcXCkuIFRoZSB1bml0IHN0ZXAgbXVzdCBhbHNvIGJlIGRlbGF5ZWQgc28gdGhlIHNpZ25hbCBzdGFydHMgYXQgXFwodD0yXFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCB0aGUgdW5pdCBzdGVwIGlzIHdyb25nIiwiTXVzdCBpZGVudGlmeSB0aGUgY29ycmVjdCBkZWxheWVkIHNpZ25hbCBhcyBcXCgodC0yKVxcLHUodC0yKVxcKSIsIk11c3QgY29ubmVjdCBcXChlXnstMnN9XFwpIHRvIGEgZGVsYXkgb2YgMiBzZWNvbmRzIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyB0aGUgdW5pbGF0ZXJhbCBkZWxheSBmb3JtIHJhdGhlciB0aGFuIG9ubHkgbWVtb3JpemluZyB0aGUgZXhwb25lbnRpYWwgZmFjdG9yLiIsImhpbnQiOiJBc2sgd2hlcmUgdGhlIHNpZ25hbCBzaG91bGQgc3RhcnQgaWYgdGhlIGRlbGF5IGlzIDIgc2Vjb25kcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InJld3JpdGluZ19iZWZvcmVfc2hpZnQiLCJsYWJlbCI6IlJld3JpdGluZyBkZWxheWVkIHRlcm1zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoeSBpcyBcXCgodC0xKVxcLHUodC0yKVxcKSBub3QgaW1tZWRpYXRlbHkgYSBzdGFuZGFyZCBkZWxheWVkIHJhbXAgdGVybT8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgdGhlIHN0ZXAgc3RhcnRzIGF0IFxcKHQ9MVxcKSIsIkIuIEJlY2F1c2UgdGhlIGV4cHJlc3Npb24gYmVzaWRlIFxcKHUodC0yKVxcKSBpcyBub3Qgd3JpdHRlbiB1c2luZyBcXCh0LTJcXCkiLCJDLiBCZWNhdXNlIHJhbXBzIGNhbm5vdCBiZSB0aW1lLXNoaWZ0ZWQiLCJELiBCZWNhdXNlIFxcKHUodC0yKVxcKSBtdXN0IGFsd2F5cyBiZSByZW1vdmVkIGJlZm9yZSB0cmFuc2Zvcm1pbmciXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUbyB1c2UgdGhlIGRlbGF5IHByb3BlcnR5IGNsZWFubHksIHRoZSBleHByZXNzaW9uIG11c3QgYmUgcmV3cml0dGVuIGluIHRlcm1zIG9mIFxcKHQtMlxcKTogXFwodC0xPSh0LTIpKzFcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHN0ZXAgXFwodSh0LTIpXFwpIHN0YXJ0cyBhdCBcXCh0PTJcXCksIG5vdCBcXCh0PTFcXCkuIiwiQyI6IlJhbXBzIGNhbiBiZSBzaGlmdGVkOyB0aGV5IGp1c3QgbXVzdCBiZSB3cml0dGVuIGluIHRoZSBjb3JyZWN0IHNoaWZ0ZWQgdmFyaWFibGUuIiwiRCI6IlRoZSB1bml0IHN0ZXAgaXMgbmVjZXNzYXJ5IGZvciB0aGUgdW5pbGF0ZXJhbCBzaGlmdGVkIGZvcm0uIn0sImhpbnQiOiJNYXRjaCB0aGUgZXhwcmVzc2lvbiB0byB0aGUgc3RlcCB0aW1lLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggcmV3cml0ZSBpcyB0aGUgYmVzdCBmaXJzdCBzdGVwIGZvciBhcHBseWluZyB0aGUgdGltZS1zaGlmdGluZyBwcm9wZXJ0eSB0byBcXCgodC0xKVxcLHUodC0yKVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKCh0LTIrMSlcXCx1KHQtMilcXCkiLCJCLiBcXCgodCsyLTEpXFwsdSh0LTIpXFwpIiwiQy4gXFwoKHQtMSlcXCx1KHQtMSlcXCkiLCJELiBcXCh0XFwsdSh0LTIpLXUodC0yKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IldyaXRpbmcgXFwodC0xPSh0LTIpKzFcXCkgZXhwcmVzc2VzIHRoZSB0ZXJtIHVzaW5nIHRoZSBzaGlmdGVkIHZhcmlhYmxlIFxcKHQtMlxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGRvZXMgbm90IGNyZWF0ZSB0aGUgbmVlZGVkIHNoaWZ0ZWQgdmFyaWFibGUgXFwodC0yXFwpLiIsIkMiOiJUaGlzIGNoYW5nZXMgdGhlIHVuaXQgc3RlcCBzdGFydCB0aW1lIGZyb20gMiB0byAxLCBzbyBpdCBpcyBub3QgdGhlIHNhbWUgc2lnbmFsLiIsIkQiOiJUaGlzIGlzIGFsZ2VicmFpY2FsbHkgdHJ1ZSwgYnV0IGl0IHN0aWxsIGxlYXZlcyBcXCh0XFwpIHJhdGhlciB0aGFuIHRoZSBzaGlmdGVkIHZhcmlhYmxlIFxcKHQtMlxcKSwgc28gaXQgaXMgbm90IHRoZSBjbGVhbiBkZWxheS1wcm9wZXJ0eSBmb3JtLiJ9LCJoaW50IjoiVGhlIGV4cHJlc3Npb24gc2hvdWxkIGNvbnRhaW4gXFwodC0yXFwpLCBiZWNhdXNlIHRoZSBzdGVwIGlzIFxcKHUodC0yKVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoic3RydWN0dXJlX2NvbXBhcmlzb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImludmVyc2VfZGVsYXlfcmVjb2duaXRpb24iLCJsYWJlbCI6IkludmVyc2UgTGFwbGFjZSBkZWxheSByZWNvZ25pdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiU3VwcG9zZSBcXChYKHMpPVhfMShzKStYXzIocylcXCxlXnstNHN9XFwpLiBXaGF0IGlzIHRoZSBjb3JyZWN0IGludmVyc2UgcGF0dGVybj8iLCJvcHRpb25zIjpbIkEuIFxcKHgodCk9eF8xKHQtNClcXCx1KHQtNCkreF8yKHQpXFwpIiwiQi4gXFwoeCh0KT14XzEodCkreF8yKHQtNClcXCx1KHQtNClcXCkiLCJDLiBcXCh4KHQpPXhfMSh0KStlXnstNHR9XFwseF8yKHQpXFwpIiwiRC4gXFwoeCh0KT14XzEodCkreF8yKHQrNClcXCx1KHQrNClcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJPbmx5IHRoZSB0ZXJtIG11bHRpcGxpZWQgYnkgXFwoZV57LTRzfVxcKSBpcyBkZWxheWVkIGJ5IDQgc2Vjb25kcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGRlbGF5cyB0aGUgd3JvbmcgdGVybS4iLCJDIjoiVGhlIGV4cG9uZW50aWFsIGZhY3RvciBpcyBpbiB0aGUgXFwoc1xcKS1kb21haW47IGl0IGRvZXMgbm90IGJlY29tZSBtdWx0aXBsaWNhdGlvbiBieSBcXChlXnstNHR9XFwpLiIsIkQiOiJUaGUgc2lnbiBpbmRpY2F0ZXMgYW4gYWR2YW5jZSwgbm90IGEgZGVsYXkuIn0sImhpbnQiOiJBcHBseSB0aGUgZGVsYXkgb25seSB0byB0aGUgcGFydCB0aGF0IGhhcyBcXChlXnstNHN9XFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
