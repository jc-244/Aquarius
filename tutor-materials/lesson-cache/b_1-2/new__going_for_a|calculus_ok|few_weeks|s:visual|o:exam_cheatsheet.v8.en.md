# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the two coordinate descriptions of a complex number, convert fluently between them, and interpret the conjugate geometrically — all skills that appear directly on exams.

---

Consider z = 3 + 4j. You can read this number two ways: as **3 units across and 4 units up** on the complex plane, or as a point at **distance 5 from the origin, pointing at some angle**. Same number, two descriptions.

This section is about exactly that: the algebraic forms used to describe one complex number — **rectangular form**, **polar form**, and the **complex conjugate**. You will also see why engineers and mathematicians reach for complex numbers even when a problem starts and ends with real quantities: complex notation compresses messy trigonometric derivations into clean algebra.

### EXAM RELEVANCE

Exam questions routinely ask you to identify a, b, r, and θ; convert between forms; and interpret z* geometrically. Know these cold.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 unifies all three descriptions on one diagram: rectangular coordinates (a, b) locate the point, polar data (r, θ) give its distance and direction from the origin, and the conjugate z* = a − jb appears as the mirror image reflected across the real axis.*

## 1. One Number, Two Coordinate Systems

Start with the concrete case: z = 3 + 4j. The **3** tells you how far to move horizontally (the real direction); the **4** tells you how far to move vertically (the imaginary direction). That is **rectangular form**: z = a + jb, where a is the horizontal coordinate and b is the vertical coordinate.

Now look at the same point from the origin. It sits at some distance r and points in some direction θ. That is **polar form**: the same point described by magnitude and angle instead of horizontal and vertical steps.

### COMMON MISTAKE

Do not confuse a with r. The real part **a** is only the horizontal coordinate. The magnitude **r** is the straight-line distance from the origin to the point — it uses **both** coordinates. For z = 3 + 4j, a = 3 but r = 5.

The bridge between forms is:

- **a = r cos θ** — the horizontal coordinate is the projection of r onto the real axis
- **b = r sin θ** — the vertical coordinate is the projection of r onto the imaginary axis

Substituting these into z = a + jb gives the polar expansion shown below.

$$z = a + jb = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$
*This is not three different numbers — it is one complex number written three equivalent ways. The first form is rectangular, using coordinates a and b directly. The middle form substitutes a = r cos θ and b = r sin θ into the rectangular expression. The last form factors out r, revealing the polar structure: a scale factor r multiplying a unit-length complex number that encodes direction through cosine and sine.*

## 2. Conjugate and Geometric Meaning

If z = 3 + 4j, then its **complex conjugate** is z* = 3 − 4j. The rule is simple: keep the real part exactly as it is, and flip the sign of the imaginary part.

Geometrically, look at Fig. B.2 again. The point z sits above the real axis; z* sits the same horizontal distance from the origin but the same distance **below** the real axis. The conjugate is the **reflection of z across the real axis**.

### KEY INSIGHT

Because only the vertical coordinate flips, z and z* share the same magnitude r. Their angles, however, are equal in size but opposite in sign: if z has angle +θ, then z* has angle −θ.

#### Exam Note

You will often be asked to identify z* from a diagram or to state what geometric operation produces it. The answer is always: reflection across the real axis, with the real part unchanged.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*This is Euler's formula — the bridge that connects the trigonometric polar expression to a compact exponential form. Without deriving it here, the key consequence is that the factor (cos θ + j sin θ) inside z = r(cos θ + j sin θ) can be replaced by e^{jθ}, giving the shorthand z = re^{jθ}. This exponential form will prove especially useful when multiplying and dividing complex numbers in later sections.*

Think of rectangular and polar form as two navigation languages describing the same destination.

**Rectangular form** is like giving street directions: "Walk 3 blocks east, then 4 blocks north." You specify independent horizontal and vertical steps — useful when you need to add displacements.

**Polar form** is like a pilot's heading: "Fly 5 km at bearing 53°." You specify total distance and direction in one breath — useful when you need to scale or rotate.

Both descriptions land you at exactly the same point on the map. On an exam, if you are given one form and asked for the other, you are simply translating between these two navigation languages using a = r cos θ and b = r sin θ.

---
**📌 Key Takeaways**
- Rectangular form z = a + jb gives horizontal coordinate a and vertical coordinate b.
- Polar form uses r (distance from origin) and θ (angle from positive real axis).
- Conversion: a = r cos θ and b = r sin θ link the two forms.
- Conjugate z* flips the sign of b only — a geometric reflection across the real axis.
- Euler's formula e^{jθ} = cos θ + j sin θ bridges polar form to compact z = re^{jθ}.

*In the next section we will build on this notation to do more with complex-number operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX3JvbGVzIiwibGFiZWwiOiJEaXN0aW5ndWlzaCBhLCBiLCByLCBhbmQgdGhldGEiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gYSArIGpiLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIGEgaXMgYWx3YXlzIHRoZSBtYWduaXR1ZGUgb2YgeiIsIkIuIGIgaXMgdGhlIGFuZ2xlIG9mIHoiLCJDLiBhIGFuZCBiIGFyZSByZWN0YW5ndWxhciBjb29yZGluYXRlcywgd2hpbGUgciBhbmQgdGhldGEgYXJlIHBvbGFyIGNvb3JkaW5hdGVzIiwiRC4gciBpcyB0aGUgcmVhbCBwYXJ0IG9mIHoiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJJbiByZWN0YW5ndWxhciBmb3JtLCBhIGFuZCBiIGdpdmUgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGNvb3JkaW5hdGVzLiBJbiBwb2xhciBmb3JtLCByIGdpdmVzIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiBhbmQgdGhldGEgZ2l2ZXMgZGlyZWN0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6ImEgaXMgb25seSB0aGUgcmVhbCBwYXJ0LCBub3QgdGhlIG1hZ25pdHVkZSBpbiBnZW5lcmFsLiIsIkIiOiJiIGlzIHRoZSBpbWFnaW5hcnktcGFydCBjb29yZGluYXRlLCBub3QgdGhlIGFuZ2xlLiIsIkQiOiJyIGlzIHRoZSBtYWduaXR1ZGUsIG5vdCB0aGUgcmVhbCBwYXJ0LiJ9LCJoaW50IjoiQXNrIHdoaWNoIHN5bWJvbHMgZGVzY3JpYmUgY29vcmRpbmF0ZXMgYW5kIHdoaWNoIGRlc2NyaWJlIGRpc3RhbmNlLWFuZC1hbmdsZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnRm9yIGFueSBjb21wbGV4IG51bWJlciwgdGhlIHJlYWwgcGFydCBhbmQgdGhlIG1hZ25pdHVkZSBtZWFuIHRoZSBzYW1lIHRoaW5nLicgV2hpY2ggcmVzcG9uc2UgaXMgYmVzdD8iLCJvcHRpb25zIjpbIkEuIENvcnJlY3QsIGJlY2F1c2UgYm90aCBhcmUgbWVhc3VyZWQgb24gdGhlIGhvcml6b250YWwgYXhpcyIsIkIuIEluY29ycmVjdCwgYmVjYXVzZSB0aGUgbWFnbml0dWRlIGlzIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiwgd2hpbGUgdGhlIHJlYWwgcGFydCBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUiLCJDLiBDb3JyZWN0LCBidXQgb25seSB3aGVuIHRoZSBpbWFnaW5hcnkgcGFydCBpcyBwb3NpdGl2ZSIsIkQuIEluY29ycmVjdCwgYmVjYXVzZSB0aGUgbWFnbml0dWRlIGlzIHRoZSBzYW1lIGFzIHRoZSBpbWFnaW5hcnkgcGFydCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoaXMgaXMgYSBzdGFuZGFyZCBleGFtIHRyYXAuIFRoZSByZWFsIHBhcnQgaXMgb25lIGNvb3JkaW5hdGU7IHRoZSBtYWduaXR1ZGUgdXNlcyBib3RoIGNvb3JkaW5hdGVzIGFuZCBtZWFzdXJlcyB0b3RhbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiTWFnbml0dWRlIGlzIG5vdCByZWFkIG9ubHkgZnJvbSB0aGUgaG9yaXpvbnRhbCBheGlzLiIsIkMiOiJUaGUgY2xhaW0gaXMgbm90IGdlbmVyYWxseSB0cnVlLCBhbmQgcG9zaXRpdml0eSBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQgZG9lcyBub3QgZml4IGl0LiIsIkQiOiJNYWduaXR1ZGUgaXMgbm90IGVxdWFsIHRvIHRoZSBpbWFnaW5hcnkgcGFydCBlaXRoZXIuIn0sImhpbnQiOiJDb21wYXJlIHRoZSBtZWFuaW5ncyBvZiAnY29vcmRpbmF0ZScgYW5kICdkaXN0YW5jZScuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb252ZXJzaW9uX3JlbGF0aW9ucyIsImxhYmVsIjoiVXNlIGEgPSByIGNvcyB0aGV0YSBhbmQgYiA9IHIgc2luIHRoZXRhIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBhIGNvbXBsZXggbnVtYmVyIGhhcyBwb2xhciBkYXRhIChyLCB0aGV0YSksIHdoaWNoIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIGRvZXMgaXQgaGF2ZT8iLCJvcHRpb25zIjpbIkEuIChyIHNpbiB0aGV0YSwgciBjb3MgdGhldGEpIiwiQi4gKHIgY29zIHRoZXRhLCByIHNpbiB0aGV0YSkiLCJDLiAoY29zIHRoZXRhLCBzaW4gdGhldGEpIiwiRC4gKHIsIHRoZXRhKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSByZWN0YW5ndWxhciBjb29yZGluYXRlcyBhcmUgYSA9IHIgY29zIHRoZXRhIGFuZCBiID0gciBzaW4gdGhldGEsIHNvIHRoZSBwb2ludCBpcyAoYSwgYikgPSAociBjb3MgdGhldGEsIHIgc2luIHRoZXRhKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHRoZSBjb3NpbmUgYW5kIHNpbmUgcm9sZXMuIiwiQyI6IlRoaXMgb21pdHMgdGhlIHNjYWxlIGZhY3RvciByLiIsIkQiOiJyIGFuZCB0aGV0YSBhcmUgcG9sYXIgZGF0YSwgbm90IENhcnRlc2lhbiBjb29yZGluYXRlcy4ifSwiaGludCI6IkNvc2luZSBnaXZlcyB0aGUgaG9yaXpvbnRhbCBjb21wb25lbnQ7IHNpbmUgZ2l2ZXMgdGhlIHZlcnRpY2FsIGNvbXBvbmVudC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV93aXRoX3JhZGl1c19hbmRfYW5nbGUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IlN0YXJ0aW5nIGZyb20geiA9IGEgKyBqYiBhbmQgdXNpbmcgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIHRoZXRhKSwgc2hvdyBzdGVwIGJ5IHN0ZXAgd2h5IHogPSByKGNvcyB0aGV0YSArIGogc2luIHRoZXRhKS4iLCJpZGVhbF9hbnN3ZXIiOiJVc2UgYSA9IHIgY29zIHRoZXRhIGFuZCBiID0gciBzaW4gdGhldGEuIFRoZW4geiA9IGEgKyBqYiA9IHIgY29zIHRoZXRhICsgaihyIHNpbiB0aGV0YSkgPSByIGNvcyB0aGV0YSArIGpyIHNpbiB0aGV0YSA9IHIoY29zIHRoZXRhICsgaiBzaW4gdGhldGEpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3Vic3RpdHV0ZSBhID0gciBjb3MgdGhldGEgYW5kIGIgPSByIHNpbiB0aGV0YSBjb3JyZWN0bHkiLCJNdXN0IHNob3cgdGhlIGludGVybWVkaWF0ZSBsaW5lIHIgY29zIHRoZXRhICsganIgc2luIHRoZXRhIiwiTXVzdCBmYWN0b3Igb3V0IHIgY29ycmVjdGx5IiwiTXVzdCBwcmVzZXJ2ZSBqIHdpdGggdGhlIHNpbmUgdGVybSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgY2FuIHBlcmZvcm0gdGhlIHRleHRib29rIGRlcml2YXRpb24sIG5vdCBqdXN0IG1lbW9yaXplIHRoZSBmaW5hbCBmb3JtLiIsImhpbnQiOiJSZXBsYWNlIGEgYW5kIGIgZmlyc3Q7IGZhY3RvciBvbmx5IGFmdGVyIHN1YnN0aXR1dGlvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJjb25qdWdhdGVfZ2VvbWV0cnkiLCJsYWJlbCI6IkludGVycHJldCB0aGUgY29tcGxleCBjb25qdWdhdGUgZ2VvbWV0cmljYWxseSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSAyIC0gNWosIHdoaWNoIHN0YXRlbWVudCBhYm91dCBpdHMgY29uanVnYXRlIHoqIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiB6KiA9IC0yICsgNWoiLCJCLiB6KiA9IDIgKyA1aiBhbmQgaXQgaXMgdGhlIHJlZmxlY3Rpb24gb2YgeiBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIHoqID0gMiArIDVqIGFuZCBpdCBpcyB0aGUgcmVmbGVjdGlvbiBvZiB6IGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMiLCJELiB6KiA9IC0yIC0gNWoiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgY29uanVnYXRlIGNoYW5nZXMgb25seSB0aGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQuIEdlb21ldHJpY2FsbHksIHRoYXQgcmVmbGVjdHMgdGhlIHBvaW50IGFjcm9zcyB0aGUgcmVhbCBheGlzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSByZWFsIHBhcnQgc2hvdWxkIHN0YXkgMiwgbm90IGJlY29tZSAtMi4iLCJDIjoiUmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIHdvdWxkIGNoYW5nZSB0aGUgcmVhbCBwYXJ0LCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0LiIsIkQiOiJBIGNvbmp1Z2F0ZSBkb2VzIG5vdCBjaGFuZ2UgYm90aCBzaWducy4ifSwiaGludCI6IkNvbmp1Z2F0aW9uIGtlZXBzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgYW5kIGZsaXBzIHRoZSB2ZXJ0aWNhbCBvbmUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InBvaW50X2FuZF9jb25qdWdhdGVfcmVmbGVjdGlvbl9vbl9jb21wbGV4X3BsYW5lIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiZXVsZXJfYnJpZGdlIiwibGFiZWwiOiJSZWNvZ25pemUgRXVsZXIncyBmb3JtdWxhIGFzIHRoZSBicmlkZ2UgdG8gZXhwb25lbnRpYWwgZm9ybSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoYXQgaXMgdGhlIG1haW4gcm9sZSBvZiBFdWxlcidzIGZvcm11bGEgZV57aiB0aGV0YX0gPSBjb3MgdGhldGEgKyBqIHNpbiB0aGV0YSBpbiB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBJdCBwcm92ZXMgdGhhdCB0aGUgcmVhbCBwYXJ0IGFsd2F5cyBlcXVhbHMgdGhlIG1hZ25pdHVkZSIsIkIuIEl0IGNvbnZlcnRzIHRoZSByZWN0YW5ndWxhciBmb3JtIGEgKyBqYiBkaXJlY3RseSBpbnRvIGEgLSBqYiIsIkMuIEl0IGxldHMgdXMgcmV3cml0ZSB0aGUgcG9sYXIgdHJpZ29ub21ldHJpYyBmb3JtIGNvbXBhY3RseSBhcyBhbiBleHBvbmVudGlhbCBmb3JtIiwiRC4gSXQgc2hvd3MgdGhhdCBldmVyeSBjb21wbGV4IG51bWJlciBpcyBwdXJlbHkgaW1hZ2luYXJ5Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIHJlcGxhY2VzIGNvcyB0aGV0YSArIGogc2luIHRoZXRhIGJ5IGVee2ogdGhldGF9LCBzbyB6ID0gcihjb3MgdGhldGEgKyBqIHNpbiB0aGV0YSkgYmVjb21lcyB6ID0gcmVee2ogdGhldGF9LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkV1bGVyJ3MgZm9ybXVsYSBzYXlzIG5vdGhpbmcgbGlrZSB0aGF0LiIsIkIiOiJUaGF0IHdvdWxkIGJlIGNvbmp1Z2F0aW9uLCBub3QgRXVsZXIncyBmb3JtdWxhLiIsIkQiOiJDb21wbGV4IG51bWJlcnMgZ2VuZXJhbGx5IGhhdmUgYm90aCByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMuIn0sImhpbnQiOiJGb2N1cyBvbiB3aGF0IGV4cHJlc3Npb24gRXVsZXIncyBmb3JtdWxhIHN1YnN0aXR1dGVzIGZvci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
