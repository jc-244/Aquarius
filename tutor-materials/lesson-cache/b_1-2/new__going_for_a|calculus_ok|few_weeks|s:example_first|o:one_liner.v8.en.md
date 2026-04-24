# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Connect the rectangular form z = a + jb to the polar form z = r(cos θ + j sin θ), and compress both into Euler's exponential form z = re^{jθ}.

Consider z = 3 + 4j. You can describe this number two ways: by its horizontal and vertical components (3 steps right, 4 steps up), or by its straight-line distance from the origin and the angle that line makes with the real axis. Same point, two descriptions.

This section shows exactly how those two descriptions connect — and why switching between them makes later signal and circuit formulas far easier to handle.

> Real numbers are a special case of complex numbers, not a separate world. Treating complex numbers as a brief detour is what makes many derivations in this course tractable.

### EXAM WARNING

Students frequently lose points by confusing **a** (the real coordinate) with **r** (the magnitude). These are not the same. Keep them separate from the start.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Figure B.2 shows two equivalent descriptions of the same complex number z = a + jb: the rectangular coordinates (a, b) locate the point directly, while the magnitude r and angle θ locate it by distance and direction — and the conjugate z* = a − jb appears as a mirror reflection across the real axis.*

## 1. Rectangular Form and Polar Form Describe the Same Number

Start with z = 3 + 4j. In **rectangular form**, the two pieces of information are:

- **a = 3** — the horizontal (real) coordinate
- **b = 4** — the vertical (imaginary) coordinate coefficient

Now look at the same point geometrically. Draw a line from the origin to (3, 4). That line has a length and it makes an angle with the positive real axis. Those two quantities are the **polar** description of the exact same point.

#### Key Distinction

| Symbol | Name | What it measures |
|--------|------|------------------|
| a | Real coordinate | Horizontal distance only |
| b | Imaginary coordinate | Vertical distance only |
| r | Magnitude | Total distance from origin |
| θ | Angle | Direction from positive real axis |

### COMMON MISTAKE

**r is not the real part.** For z = 3 + 4j, the real part is a = 3, but the magnitude is r = 5. Confusing these two is one of the most common exam errors in this course.

The conversion bridge between the two forms is built from a right triangle: the horizontal leg is a, the vertical leg is b, and the hypotenuse is r.

$$z = a + jb$$
*This is the rectangular form of a complex number, where a is the real coordinate (horizontal position) and b is the coefficient of j for the imaginary coordinate (vertical position).*

$$a = r\cos\theta,\quad b = r\sin\theta,\quad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These equations are the translation bridge between the two forms: the same complex number is described either by its horizontal component a and vertical component b, or by its magnitude r and angle θ — and the cosine and sine projections connect them. Keeping these formulas in mind is the primary defense against mistakenly treating a and r as interchangeable.*

## 2. Euler's Formula Compresses the Polar Form

The polar form z = r(cos θ + j sin θ) is correct but verbose. **Euler's formula** gives the combination cos θ + j sin θ a single compact name:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

This is not a new mathematical object — it is simply a shorthand. The exponential e^{jθ} carries exactly the same angle information as the cosine and sine pair. Substituting directly:

$$z = r(\cos\theta + j\sin\theta) \;=\; re^{j\theta}$$

#### Concrete Example

If r = 5 and the angle is θ, then z = 5e^{jθ} means exactly the same point as 5(cos θ + j sin θ). Nothing about the complex number changes — only the notation becomes shorter.

### WHY THIS MATTERS FOR THE EXAM

Multiplication, division, and phasor calculations in later sections all become one-line operations in exponential form. Learning to move fluently between z = a + jb, z = r(cos θ + j sin θ), and z = re^{jθ} is a core skill for the rest of the course.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the full angle information — both the cosine and sine components — into a single exponential expression, without changing the complex number itself in any way.*

---
**📌 Key Takeaways**
- Rectangular form (a, b) and polar form (r, θ) are two equivalent descriptions of the same complex number.
- The real and imaginary components come from the magnitude and angle via a = r cos θ and b = r sin θ.
- Euler's formula e^{jθ} = cos θ + j sin θ compresses the polar form to z = re^{jθ}.

***Core takeaway:** r is the magnitude, a is the real coordinate — never confuse them, and always know which form you are working in.

In the next section we will apply these forms to arithmetic operations on complex numbers, where the exponential form makes multiplication and division dramatically simpler.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX3JvbGVzIiwibGFiZWwiOiJEaXN0aW5ndWlzaGluZyBhLCBiLCByLCBhbmQgzrgiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gYSArIGpiLCB3aGljaCBzdGF0ZW1lbnQgaXMgYWx3YXlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiByID0gYSIsIkIuIGIgaXMgdGhlIGFuZ2xlIG9mIHoiLCJDLiBhIGlzIHRoZSByZWFsIGNvb3JkaW5hdGUgYW5kIGIgaXMgdGhlIGltYWdpbmFyeS1jb29yZGluYXRlIGNvZWZmaWNpZW50IiwiRC4gzrggaXMgdGhlIG1hZ25pdHVkZSBvZiB6Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiSW4gcmVjdGFuZ3VsYXIgZm9ybSwgYSBnaXZlcyB0aGUgaG9yaXpvbnRhbCByZWFsIGNvb3JkaW5hdGUgYW5kIGIgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGogZm9yIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6InIgaXMgdGhlIG1hZ25pdHVkZSwgbm90IGdlbmVyYWxseSBlcXVhbCB0byBhLiIsIkIiOiJiIGlzIGEgY29vcmRpbmF0ZSB2YWx1ZSwgbm90IGFuIGFuZ2xlLiIsIkQiOiLOuCBpcyB0aGUgYW5nbGUsIHdoaWxlIHIgaXMgdGhlIG1hZ25pdHVkZS4ifSwiaGludCI6IlNlcGFyYXRlIGNvb3JkaW5hdGVzIGZyb20gcG9sYXIgcXVhbnRpdGllcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnRm9yIGFueSBjb21wbGV4IG51bWJlciwgdGhlIHJlYWwgcGFydCBhIGFuZCB0aGUgbWFnbml0dWRlIHIgbWVhbiB0aGUgc2FtZSB0aGluZy4nIFdoYXQgaXMgdGhlIGJlc3QgcmVzcG9uc2U/Iiwib3B0aW9ucyI6WyJBLiBDb3JyZWN0LCBiZWNhdXNlIGJvdGggYXJlIG1lYXN1cmVkIGFsb25nIHRoZSByZWFsIGF4aXMiLCJCLiBDb3JyZWN0IG9ubHkgd2hlbiBiID0gMCIsIkMuIEluY29ycmVjdCwgYmVjYXVzZSByIGlzIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB3aGlsZSBhIGlzIG9ubHkgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSIsIkQuIEluY29ycmVjdCwgYmVjYXVzZSByIGlzIGFsd2F5cyBzbWFsbGVyIHRoYW4gYSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBtYWduaXR1ZGUgciBtZWFzdXJlcyB0b3RhbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIHdoaWxlIGEgbWVhc3VyZXMgb25seSB0aGUgcmVhbC1heGlzIGNvbXBvbmVudC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJyIGlzIG5vdCBtZWFzdXJlZCBvbmx5IGFsb25nIHRoZSByZWFsIGF4aXMuIiwiQiI6IklmIGIgPSAwIGFuZCBhIGlzIHBvc2l0aXZlIHRoZW4gciA9IGEsIGJ1dCB0aGV5IGFyZSBzdGlsbCBkaWZmZXJlbnQgY29uY2VwdHM7IHRoZSBzdGF0ZW1lbnQgJ2ZvciBhbnkgY29tcGxleCBudW1iZXInIGlzIGZhbHNlLiIsIkQiOiJyIGlzIG5vdCBhbHdheXMgc21hbGxlciB0aGFuIGE7IG9mdGVuIGl0IGlzIGxhcmdlciBpbiBtYWduaXR1ZGUuIn0sImhpbnQiOiJUaGluayBvZiBhIHJpZ2h0IHRyaWFuZ2xlOiBvbmUgc2lkZSB2ZXJzdXMgdGhlIHdob2xlIGh5cG90ZW51c2UuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xhcl9yZWxhdGlvbnNoaXBzIiwibGFiZWwiOiJVc2luZyBhID0gciBjb3MgzrggYW5kIGIgPSByIHNpbiDOuCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgYSBjb21wbGV4IG51bWJlciBoYXMgcG9sYXIgZGF0YSAociwgzrgpLCB3aGljaCBwYWlyIGNvcnJlY3RseSBnaXZlcyBpdHMgcmVjdGFuZ3VsYXIgY29tcG9uZW50cz8iLCJvcHRpb25zIjpbIkEuIGEgPSByIHNpbiDOuCwgYiA9IHIgY29zIM64IiwiQi4gYSA9IHIgY29zIM64LCBiID0gciBzaW4gzrgiLCJDLiBhID0gY29zIM64LCBiID0gc2luIM64IiwiRC4gYSA9IHLOuCwgYiA9IHIvzrgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgcmVhbCBjb21wb25lbnQgY29tZXMgZnJvbSB0aGUgY29zaW5lIHByb2plY3Rpb24gYW5kIHRoZSBpbWFnaW5hcnkgY29tcG9uZW50IGNvbWVzIGZyb20gdGhlIHNpbmUgcHJvamVjdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgY29tcG9uZW50cy4iLCJDIjoiVGhpcyBpZ25vcmVzIHRoZSBtYWduaXR1ZGUgci4iLCJEIjoiVGhlc2UgZm9ybXVsYXMgYXJlIHVucmVsYXRlZCB0byBwb2xhciBjb252ZXJzaW9uLiJ9LCJoaW50IjoiQ29zaW5lIGdvZXMgd2l0aCB0aGUgaG9yaXpvbnRhbCBzaWRlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwb2ludCB6IGluIHRoZSBjb21wbGV4IHBsYW5lIGhhcyBtYWduaXR1ZGUgciBhbmQgYW5nbGUgzrguIFdoaWNoIGV4cHJlc3Npb24gcmVwcmVzZW50cyB6IGluIHBvbGFyIHRyaWdvbm9tZXRyaWMgZm9ybT8iLCJvcHRpb25zIjpbIkEuIHogPSByICsgas64IiwiQi4geiA9IGEgKyBiIiwiQy4geiA9IHIoY29zIM64ICsgaiBzaW4gzrgpIiwiRC4geiA9IGVee3LOuH0iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGlzIGlzIHRoZSBzdGFuZGFyZCBwb2xhciB0cmlnb25vbWV0cmljIGZvcm0gb2J0YWluZWQgZnJvbSB0aGUgY29tcG9uZW50IHJlbGF0aW9ucyBhID0gciBjb3MgzrggYW5kIGIgPSByIHNpbiDOuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGluY29ycmVjdGx5IG1peGVzIG1hZ25pdHVkZSBhbmQgYW5nbGUgYXMgYWRkaXRpdmUgY29vcmRpbmF0ZXMuIiwiQiI6IlRoaXMgb21pdHMgaiBhbmQgZG9lcyBub3QgZXhwcmVzcyBhIGNvbXBsZXggbnVtYmVyIHByb3Blcmx5LiIsIkQiOiJUaGlzIGlzIG5vdCB0aGUgdGV4dGJvb2sgcG9sYXIgZm9ybS4ifSwiaGludCI6Ikxvb2sgZm9yIGNvc2luZSBhbmQgc2luZSB0b2dldGhlciB3aXRoIGouIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliX2NvbXBsZXhfcGxhbmVfd2l0aF9yYWRpdXNfYW5nbGUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJldWxlcl9mb3JtdWxhX2VxdWl2YWxlbmNlIiwibGFiZWwiOiJDb25uZWN0aW5nIHRyaWdvbm9tZXRyaWMgcG9sYXIgZm9ybSB0byBleHBvbmVudGlhbCBmb3JtIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlVzaW5nIEV1bGVyJ3MgZm9ybXVsYSwgd2hpY2ggZXhwcmVzc2lvbiBpcyBlcXVpdmFsZW50IHRvIHIoY29zIM64ICsgaiBzaW4gzrgpPyIsIm9wdGlvbnMiOlsiQS4gcmVee2rOuH0iLCJCLiByZV7OuCIsIkMuIHJqXs64IiwiRC4gZV57cmrOuH0iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgZ2l2ZXMgZV57as64fSA9IGNvcyDOuCArIGogc2luIM64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGRyb3BzIHRoZSBpbWFnaW5hcnkgdW5pdCBpbiB0aGUgZXhwb25lbnQuIiwiQyI6IlRoaXMgaXMgbm90IGEgdmFsaWQgRXVsZXItZm9ybSByZXBsYWNlbWVudC4iLCJEIjoiVGhpcyBpbmNvcnJlY3RseSBwbGFjZXMgciBpbnNpZGUgdGhlIGV4cG9uZW50LiJ9LCJoaW50IjoiUmVwbGFjZSBvbmx5IGNvcyDOuCArIGogc2luIM64IHdpdGggZV57as64fS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkV4cGxhaW4gd2h5IHogPSByZV57as64fSBhbmQgeiA9IHIoY29zIM64ICsgaiBzaW4gzrgpIGRlc2NyaWJlIHRoZSBzYW1lIGNvbXBsZXggbnVtYmVyLiIsImlkZWFsX2Fuc3dlciI6IlRoZXkgYXJlIHRoZSBzYW1lIGJlY2F1c2UgRXVsZXIncyBmb3JtdWxhIHN0YXRlcyB0aGF0IGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuC4gU3Vic3RpdHV0aW5nIHRoYXQgaWRlbnRpdHkgaW50byByZV57as64fSBnaXZlcyByKGNvcyDOuCArIGogc2luIM64KSwgc28gb25seSB0aGUgbm90YXRpb24gY2hhbmdlcywgbm90IHRoZSBwb2ludCBpbiB0aGUgY29tcGxleCBwbGFuZS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IGV4cGxpY2l0bHkgY2l0ZSBFdWxlcidzIGZvcm11bGEiLCJNdXN0IHNob3cgc3Vic3RpdHV0aW9uIGZyb20gZV57as64fSB0byBjb3MgzrggKyBqIHNpbiDOuCIsIk11c3Qgc3RhdGUgdGhhdCB0aGUgY29tcGxleCBudW1iZXIgaXRzZWxmIGRvZXMgbm90IGNoYW5nZSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdmVyaWZpZXMgY29uY2VwdHVhbCB1bmRlcnN0YW5kaW5nIHJhdGhlciB0aGFuIHN5bWJvbCBtZW1vcml6YXRpb24uIiwiaGludCI6IlN0YXJ0IGZyb20gRXVsZXIncyBmb3JtdWxhIGFuZCBzdWJzdGl0dXRlIGl0IGRpcmVjdGx5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
