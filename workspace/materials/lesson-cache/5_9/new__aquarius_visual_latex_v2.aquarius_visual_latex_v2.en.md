%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1haW5seSBhIHN5bWJvbGljIGJyaWRnZSBiZXR3ZWVuIGRpc2NyZXRlLXRpbWUgYW5kIGNvbnRpbnVvdXMtdGltZSB0cmFuc2Zvcm0gbm90YXRpb24sIGJ1dCBzdHVkZW50cyBuZWVkIGEgY2xlYW4gdmlzdWFsIG9mIGFuIGltcHVsc2UgdHJhaW4gYW5kIGEgY2xlYW4gcmVmZXJlbmNlIGZvciB0aGUgcy10by16IHJlbGF0aW9uc2hpcC4gV2lraXBlZGlhIG9yIFdpa2ltZWRpYSB2aXN1YWxzIHNob3VsZCBiZSB1c2VkIGZpcnN0IGJlY2F1c2UgaW1wdWxzZSB0cmFpbnMsIHNhbXBsaW5nLCBhbmQgei1wbGFuZSBtYXBwaW5nIGFyZSBzdGFuZGFyZCBzaWduYWwtcHJvY2Vzc2luZyByZWZlcmVuY2VzLiIsImNyYW0iOiJVc2UgdmlzdWFscyB0byByZWNvZ25pemUgdGhlIGV4YW0gdHJpZ2dlcjogc2FtcGxlcyBiZWNvbWUgaW1wdWxzZXMsIGFuZCBkZWxheXMgYmVjb21lIGV4cG9uZW50aWFscy4iLCJzdGFuZGFyZCI6IlVzZSB2aXN1YWxzIHRvIGNvbm5lY3QgdGhlIHNlcXVlbmNlIFxcKHhbbl1cXCksIHRoZSBpbXB1bHNlIHRyYWluIFxcKHgodClcXCksIGFuZCB0aGUgc3Vic3RpdHV0aW9uIFxcKHo9ZV57c1R9XFwpLiIsInRvcF9zY29yZSI6IlVzZSB2aXN1YWxzIHRvIGNhdGNoIHN1YnRsZSB0cmFwczogaW1wdWxzZSBzdHJlbmd0aCBpcyBcXCh4W25dXFwpLCBzcGFjaW5nIGlzIFxcKFRcXCksIGFuZCBcXChIW2Vee3NUfV1cXCkgbWVhbnMgc3Vic3RpdHV0aW9uIGludG8gXFwoSFt6XVxcKSwgbm90IG11bHRpcGxpY2F0aW9uIGJ5IFxcKGVee3NUfVxcKS4ifQ==" style="display:none;"></div>%%KC_END%%
# Section 5.9 — Connecting the Laplace and z-Transforms

> **Section Objective:** Connect discrete-time z-transform processing to continuous-time Laplace-transform processing through sampled impulse trains and delay substitution.

---

## Concepts In This Section

- Impulse-train representation
- Delay replacement
- \(z = e^{sT}\) substitution
- Bridge formula

## 1. Turning a Sequence into an Impulse Train

To use the Laplace transform on discrete-time data, the sequence is represented as impulses placed every \(T\) seconds.

**Symbol meanings:**
- \(x[n]\) — the \(n\)th sample value; it is the **strength** (weight) of one impulse, not a waveform value between samples.
- \(\delta(t - nT)\) — a Dirac impulse **located** at time \(t = nT\).
- \(T\) — the uniform spacing between sample times.

**When to use it:** When a problem asks you to analyze a sampled sequence with Laplace-transform tools.

**Exam trigger:** Phrases like "sampled signal", "impulse train", or "samples spaced \(T\) seconds apart".

**Common misuse:** Treating \(x[n]\) as a continuous waveform value that exists between samples. It is only the weight of one impulse at \(t = nT\) — nothing more.

**Minimal example:** If \(x[2] = 5\), then the impulse at \(t = 2T\) has strength 5, i.e., the term \(5\,\delta(t - 2T)\) appears in the sum.

$$x(t)=\sum_{n=0}^{\infty}x[n]\,\delta(t-nT)$$


## 2. Replacing a z-Domain Delay with a Laplace-Domain Delay

The hardware structure stays the same; only the mathematical symbol for a delay changes.

**Symbol meanings:**
- \(z^{-1}\) — a one-sample delay in the discrete-time system.
- \(e^{-sT}\) — a continuous-time delay of \(T\) seconds expressed as a Laplace-domain transfer function.

**What stays the same:** Adders and scalar multipliers remain adders and scalar multipliers. Only the delay blocks require conversion.

**When to use it:** When a block diagram or transfer function contains powers of \(z^{-1}\).

**Exam trigger:** Phrases like "replace delays", "corresponding continuous-time realization", or "samples spaced \(T\) seconds".

**Common misuse:** Replacing \(z\) by \(e^{-sT}\). The correct base substitution is \(z = e^{sT}\) (positive exponent), so the delay factor \(z^{-1}\) maps to \(e^{-sT}\) (negative exponent). Confusing the two reverses the sign.

**Minimal example:** A term \(a\,z^{-1}\) in a discrete-time transfer function becomes \(a\,e^{-sT}\) in the continuous-time realization.

$$z^{-1}\longleftrightarrow e^{-sT}$$


## 3. The Bridge Formula: z-Transform Processing Inside the Laplace Domain

Once the sampled input is represented as an impulse train, the same discrete-time system can be viewed through a Laplace-domain transfer function.

The equation above is **(5.53)**.

**Symbol meanings:**
- \(X(s)\) — the Laplace transform of the impulse-train input.
- \(Y(s)\) — the Laplace transform of the corresponding output impulse train.
- \(H[e^{sT}]\) — take the z-domain transfer function \(H[z]\) and **substitute** \(z = e^{sT}\) everywhere \(z\) appears. This is function substitution, not multiplication.

**When to use it:** When the problem asks for a Laplace-domain description of a discrete-time system, or states that the z-transform is the Laplace transform in disguise.

**Exam trigger:** A discrete-time transfer function \(H[z]\) combined with an impulse-train input.

**Common misuse:** Reading \(H[e^{sT}]\) as \(H \cdot e^{sT}\). The brackets mean function evaluation — substitute \(z = e^{sT}\) into \(H[z]\).

**Minimal example:** If \(H[z]\) contains the term \(z^{-1}\), that term becomes \(e^{-sT}\) inside \(H[e^{sT}]\), because \((e^{sT})^{-1} = e^{-sT}\).

$$Y(s)=H[e^{sT}]\,X(s)$$

---
**📌 Key Takeaways**
- A sequence becomes an impulse train: \(x(t)=\displaystyle\sum_{n=0}^{\infty}x[n]\,\delta(t-nT)\); sample value \(x[n]\) is the impulse strength at \(t=nT\).
- One-sample delay converts as \(z^{-1}\leftrightarrow e^{-sT}\); the base substitution is \(z=e^{sT}\) (positive exponent).
- Bridge formula (5.53): \(Y(s)=H[e^{sT}]\,X(s)\); \(H[e^{sT}]\) means substitute \(z=e^{sT}\) into \(H[z]\), not multiply.
- Adders and scalars are unchanged; only delay blocks \(z^{-1}\) require replacement by \(e^{-sT}\).

*Next, use this bridge to move between sampled-data viewpoints and continuous-time transform tools.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImltcHVsc2VfdHJhaW5fcmVwcmVzZW50YXRpb24iLCJsYWJlbCI6IlJlcHJlc2VudGluZyBzYW1wbGVzIGFzIGFuIGltcHVsc2UgdHJhaW4iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc2VxdWVuY2UgXFwoeFtuXVxcKSBpcyByZXByZXNlbnRlZCBhcyBcXCh4KHQpPVxcc3VtX3tuPTB9XntcXGluZnR5fXhbbl1cXCxcXGRlbHRhKHQtblQpXFwpLiBXaGF0IGRvZXMgXFwoeFszXVxcKSBjb250cm9sPyIsIm9wdGlvbnMiOlsiQS4gVGhlIHRpbWUgc3BhY2luZyBiZXR3ZWVuIGFsbCBpbXB1bHNlcyIsIkIuIFRoZSBzdHJlbmd0aCBvZiB0aGUgaW1wdWxzZSBhdCBcXCh0PTNUXFwpIiwiQy4gVGhlIExhcGxhY2UgdmFyaWFibGUgb2YgdGhlIHRoaXJkIGltcHVsc2UiLCJELiBUaGUgZGVsYXkgb3BlcmF0b3IgYXBwbGllZCB0aHJlZSB0aW1lcyJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlxcKHhbM11cXCkgaXMgdGhlIGNvZWZmaWNpZW50IG11bHRpcGx5aW5nIFxcKFxcZGVsdGEodC0zVClcXCksIHNvIGl0IGlzIHRoZSBzdHJlbmd0aCBvZiB0aGUgaW1wdWxzZSBsb2NhdGVkIGF0IFxcKHQ9M1RcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHNwYWNpbmcgaXMgY29udHJvbGxlZCBieSBcXChUXFwpLCBub3QgYnkgYSBzYW1wbGUgdmFsdWUuIiwiQyI6IlRoZSBMYXBsYWNlIHZhcmlhYmxlIGlzIFxcKHNcXCksIG5vdCBcXCh4WzNdXFwpLiIsIkQiOiJBIGRlbGF5IG9wZXJhdG9yIHNoaWZ0cyBzaWduYWxzOyBcXCh4WzNdXFwpIGlzIGEgc2FtcGxlIHZhbHVlLiJ9LCJoaW50IjoiTG9vayBhdCB3aGljaCB0ZXJtIG11bHRpcGxpZXMgXFwoXFxkZWx0YSh0LTNUKVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlZpc3VhbCBjaGVjazogYW4gaW1wdWxzZSB0cmFpbiBoYXMgaW1wdWxzZXMgYXQgXFwoMCxcXCxULFxcLDJULFxcLDNUXFwpLiBUaGUgaW1wdWxzZSBhdCBcXCgyVFxcKSBpcyBsYWJlbGVkIHdpdGggaGVpZ2h0IDcuIFdoaWNoIHNlcXVlbmNlIHZhbHVlIGlzIDc/Iiwib3B0aW9ucyI6WyJBLiBcXCh4WzBdXFwpIiwiQi4gXFwoeFsxXVxcKSIsIkMuIFxcKHhbMl1cXCkiLCJELiBcXCh4WzddXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIGltcHVsc2UgYXQgdGltZSBcXChuVFxcKSBoYXMgc3RyZW5ndGggXFwoeFtuXVxcKS4gQXQgXFwodD0yVFxcKSwgdGhlIGluZGV4IGlzIFxcKG49MlxcKSwgc28gdGhlIHZhbHVlIGlzIFxcKHhbMl09N1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXCh4WzBdXFwpIGJlbG9uZ3MgdG8gdGhlIGltcHVsc2UgYXQgXFwodD0wXFwpLiIsIkIiOiJcXCh4WzFdXFwpIGJlbG9uZ3MgdG8gdGhlIGltcHVsc2UgYXQgXFwodD1UXFwpLiIsIkQiOiJUaGUgaGVpZ2h0IDcgaXMgdGhlIHZhbHVlIG9mIHRoZSBzYW1wbGUsIG5vdCB0aGUgdGltZSBpbmRleC4ifSwiaGludCI6Ik1hdGNoIFxcKHQ9blRcXCkgdG8gdGhlIGluZGV4IFxcKG5cXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InZpc3VhbF9wYXR0ZXJuX3JlY29nbml0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJkZWxheV9yZXBsYWNlbWVudCIsImxhYmVsIjoiUmVwbGFjaW5nIGRpc2NyZXRlLXRpbWUgZGVsYXkgd2l0aCBjb250aW51b3VzLXRpbWUgZGVsYXkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBjb250aW51b3VzLXRpbWUgcmVhbGl6YXRpb24gY29ycmVzcG9uZGluZyB0byBhIGRpc2NyZXRlLXRpbWUgc3lzdGVtLCB3aGF0IHJlcGxhY2VzIG9uZSBmYWN0b3Igb2YgXFwoel57LTF9XFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoZV57LXNUfVxcKSIsIkIuIFxcKGVee3NUfVxcKSIsIkMuIFxcKHNeey0xfVxcKSIsIkQuIFxcKFR6XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSBmYWN0b3IgXFwoel57LTF9XFwpIG1lYW5zIG9uZSBzYW1wbGUgZGVsYXkuIEluIHRoZSBMYXBsYWNlIGRvbWFpbiwgYSBkZWxheSBvZiBcXChUXFwpIHNlY29uZHMgaGFzIHRyYW5zZmVyIGZ1bmN0aW9uIFxcKGVeey1zVH1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiXFwoZV57c1R9XFwpIGNvcnJlc3BvbmRzIHRvIFxcKHpcXCksIG5vdCB0aGUgZGVsYXkgZmFjdG9yIFxcKHpeey0xfVxcKS4iLCJDIjoiXFwoc157LTF9XFwpIHJlcHJlc2VudHMgaW50ZWdyYXRpb24sIG5vdCBhIHB1cmUgdGltZSBkZWxheS4iLCJEIjoiXFwoVHpcXCkgaXMgbm90IHRoZSBMYXBsYWNlLWRvbWFpbiB0cmFuc2ZlciBmdW5jdGlvbiBvZiBhIGRlbGF5LiJ9LCJoaW50IjoiQSB0aW1lIGRlbGF5IGluIExhcGxhY2UgdHJhbnNmb3JtIG5vdGF0aW9uIGhhcyBhIG5lZ2F0aXZlIGV4cG9uZW50aWFsLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3Vic3RpdHV0aW9uIGlzIGNvbnNpc3RlbnQgd2l0aCBcXCh6XnstMX1cXGxlZnRyaWdodGFycm93IGVeey1zVH1cXCk/Iiwib3B0aW9ucyI6WyJBLiBcXCh6PWVee3NUfVxcKSIsIkIuIFxcKHo9ZV57LXNUfVxcKSIsIkMuIFxcKHo9c1RcXCkiLCJELiBcXCh6XnstMX09ZV57c1R9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiSWYgXFwoel57LTF9PWVeey1zVH1cXCksIHRoZW4gdGFraW5nIHJlY2lwcm9jYWxzIG9mIGJvdGggc2lkZXMgZ2l2ZXMgXFwoej1lXntzVH1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBpbmNvcnJlY3RseSBnaXZlcyBcXCh6XnstMX09ZV57c1R9XFwpLCByZXZlcnNpbmcgdGhlIGRlbGF5IHNpZ24uIiwiQyI6IlRoZSByZWxhdGlvbnNoaXAgaXMgZXhwb25lbnRpYWwsIG5vdCBsaW5lYXIuIiwiRCI6IlRoaXMgaGFzIHRoZSB3cm9uZyBzaWduIGZvciBhIGRlbGF5LiJ9LCJoaW50IjoiVGFrZSB0aGUgcmVjaXByb2NhbCBvZiBib3RoIHNpZGVzIG9mIFxcKHpeey0xfT1lXnstc1R9XFwpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ3cm9uZ192c19yaWdodF92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImJyaWRnZV9mb3JtdWxhIiwibGFiZWwiOiJVc2luZyB0aGUgYnJpZGdlIGZvcm11bGEgXFwoWShzKT1IW2Vee3NUfV1YKHMpXFwpIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBcXCgoNS41MylcXDtZKHMpPUhbZV57c1R9XVgocylcXCksIHdoYXQgZG9lcyBcXChIW2Vee3NUfV1cXCkgbWVhbj8iLCJvcHRpb25zIjpbIkEuIE11bHRpcGx5IFxcKEhcXCkgYnkgXFwoZV57c1R9XFwpIiwiQi4gU3Vic3RpdHV0ZSBcXCh6PWVee3NUfVxcKSBpbnRvIHRoZSB6LWRvbWFpbiB0cmFuc2ZlciBmdW5jdGlvbiBcXChIW3pdXFwpIiwiQy4gUmVwbGFjZSBcXChYKHMpXFwpIGJ5IFxcKGVee3NUfVxcKSIsIkQuIFRha2UgdGhlIGRlcml2YXRpdmUgb2YgXFwoSFxcKSB3aXRoIHJlc3BlY3QgdG8gXFwoc1xcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlxcKEhbZV57c1R9XVxcKSBpcyBmdW5jdGlvbiBzdWJzdGl0dXRpb24gbm90YXRpb246IGV2YWx1YXRlIHRoZSB6LWRvbWFpbiB0cmFuc2ZlciBmdW5jdGlvbiBcXChIW3pdXFwpIGF0IFxcKHo9ZV57c1R9XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBicmFja2V0cyBkbyBub3QgbWVhbiBtdWx0aXBsaWNhdGlvbi4iLCJDIjoiVGhlIHN1YnN0aXR1dGlvbiBpcyBpbnNpZGUgXFwoSFt6XVxcKSwgbm90IGluc2lkZSBcXChYKHMpXFwpLiIsIkQiOiJObyBkaWZmZXJlbnRpYXRpb24gaXMgaW52b2x2ZWQuIn0sImhpbnQiOiJSZWFkIHRoZSBicmFja2V0cyBhcyAncHV0IHRoaXMgdmFsdWUgaW50byB0aGUgZnVuY3Rpb24nLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5czogJ1NpbmNlIFxcKEhbZV57c1R9XVxcKSBjb250YWlucyBcXChlXntzVH1cXCksIGV2ZXJ5IGRlbGF5IFxcKHpeey0xfVxcKSBzaG91bGQgYmVjb21lIFxcKGVee3NUfVxcKS4nIEV4cGxhaW4gcHJlY2lzZWx5IHdoeSB0aGlzIGlzIHdyb25nLiIsImlkZWFsX2Fuc3dlciI6IlRoZSBzdWJzdGl0dXRpb24gaXMgXFwoej1lXntzVH1cXCkuIFRoZXJlZm9yZSBhIGRlbGF5IHRlcm0gXFwoel57LTF9XFwpIGJlY29tZXMgXFwoKGVee3NUfSleey0xfT1lXnstc1R9XFwpLiBUaGUgcG9zaXRpdmUgZXhwb25lbnQgYmVsb25ncyB0byBcXCh6XFwpLCBub3QgdG8gdGhlIGRlbGF5IGZhY3RvciBcXCh6XnstMX1cXCkuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBzdWJzdGl0dXRpb24gaXMgXFwoej1lXntzVH1cXCkiLCJNdXN0IGNvcnJlY3RseSB0cmFuc2Zvcm0gXFwoel57LTF9XFwpIGludG8gXFwoZV57LXNUfVxcKSIsIk11c3QgaWRlbnRpZnkgdGhlIHNpZ24gbWlzdGFrZSBhcyBjb25mdXNpbmcgXFwoelxcKSB3aXRoIFxcKHpeey0xfVxcKSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2F0Y2hlcyB0aGUgbW9zdCBjb21tb24gc2lnbiBlcnJvciBpbiBjb25uZWN0aW5nIHRoZSB6LXRyYW5zZm9ybSB0byB0aGUgTGFwbGFjZSB0cmFuc2Zvcm0uIiwiaGludCI6IkFwcGx5IHRoZSBzdWJzdGl0dXRpb24gdG8gdGhlIHdob2xlIHRlcm0gXFwoel57LTF9XFwpLCBub3QganVzdCB0byB0aGUgc3ltYm9sIFxcKHpcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19XX0=" style="display:none;"></div>%%KC_END%%
