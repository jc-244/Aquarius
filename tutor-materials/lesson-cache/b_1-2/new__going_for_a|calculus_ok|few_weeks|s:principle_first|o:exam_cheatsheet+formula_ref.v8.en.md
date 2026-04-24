# B.1-2 Algebra of Complex Numbers

> **Objective:** Identify Re(z) and Im(z), convert between rectangular and polar forms, and understand why z* reflects across the real axis.

---

Take z = 3 + 4j. You can describe this number in two completely equivalent ways: as the coordinate pair (3, 4) — three steps right, four steps up — or as a distance of 5 from the origin at a specific angle. Neither description is more "correct"; they are two languages for the same point.

This section covers the core algebraic representations of complex numbers. You will learn to read Re(z) and Im(z) directly from rectangular form, convert between the coordinate pair (a, b) and the polar data (r, θ), and recognize the complex conjugate z* as a geometric reflection.

### WHY THIS MATTERS FOR THE EXAM

Exams frequently test whether you confuse the real part a with the magnitude r. These are not the same thing — and by the end of this section, that distinction will be completely clear.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 ties together all three representations at once: the point z = a + jb sits at rectangular coordinates (a, b), its distance from the origin is the magnitude r at angle θ, and its conjugate z* = a − jb appears as the mirror image reflected across the real axis.*

## 1. Rectangular Form vs. Polar Form

Start with the concrete example: z = 3 + 4j. Here, **a = 3** is the real part and **b = 4** is the imaginary part. The general rule is:

> z = a + jb, where Re(z) = a and Im(z) = b.

**Rectangular form** gives you the coordinate pair (a, b) — think of it as the address on a grid map. **Polar form** gives you two different pieces of information: the distance r from the origin, and the angle θ measured counterclockwise from the positive real axis.

### COMMON MISTAKE

Do not write r = a. The real part a is only the horizontal coordinate — it tells you how far right the point sits. The magnitude r is the full straight-line distance from the origin to the point. For z = 3 + 4j, a = 3 but r = 5. These are different numbers.

#### Quick Formula Reference

```
Re(z) = a,   Im(z) = b
a = r cosθ,  b = r sinθ
```

$$z = a + jb = r(\cos\theta + j\sin\theta)$$
*This single equation gives two equivalent descriptions of the same complex number. On the left, rectangular form locates the point by its horizontal coordinate a and vertical coordinate b. On the right, polar form locates it by the distance r from the origin and the angle θ from the positive real axis. The two descriptions are linked — a and b are not independent of r and θ, but are determined by them through a = r cosθ and b = r sinθ.*

## 2. Deriving the Polar Relations

Place z = a + jb on the complex plane. The real part a runs along the horizontal axis and the imaginary part b runs along the vertical axis. These two sides, together with the line from the origin to the point, form a right triangle.

For z = 3 + 4j specifically: the horizontal side has length 3, the vertical side has length 4. By the Pythagorean theorem:

r = √(3² + 4²) = √(9 + 16) = √25 = **5**

Notice that r = 5 is not the same as a = 3. The real part is just one leg of the triangle; the magnitude is the hypotenuse.

The angle θ comes from basic trigonometry. In the right triangle, the horizontal side is adjacent to θ and the vertical side is opposite:

- cos θ = a / r → **a = r cos θ**
- sin θ = b / r → **b = r sin θ**

These two equations are the bridge between rectangular and polar form. Memorize them in both directions.

### KEY INSIGHT

Magnitude r is always the hypotenuse — it is always at least as large as either coordinate alone.

#### Quick Formula Reference

```
r = √(a² + b²)
a = r cosθ
b = r sinθ
```

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula compresses the cosine-and-sine description into a compact exponential. This means the polar form r(cosθ + j sinθ) can be written even more concisely as z = r e^{jθ}. For this section, treat it as a representation tool: the exponential form and the trigonometric form are identical, and you can move between them freely.*

## 3. The Complex Conjugate

If z = 3 + 4j, then its complex conjugate is z* = 3 − 4j. The general rule:

> If z = a + jb, then z* = a − jb.

Conjugation does exactly one thing: it **keeps the real part unchanged** and **flips the sign of the imaginary part**. On the complex plane shown in Fig. B.2, this means z* is the mirror image of z reflected across the real (horizontal) axis. The point moves from above the axis to the same distance below it — or vice versa — while staying at the same horizontal position.

This geometric picture is worth remembering: conjugation = reflection across the real axis. The magnitude r is unchanged because the distance from the origin is the same for both z and z*.

#### Quick Formula Reference

```
z* = a − jb
Same real part, opposite imaginary part
```

---
**📌 Key Takeaways**
- Re(z) = a and Im(z) = b are coordinates; magnitude r = √(a² + b²) is the distance from the origin.
- Rectangular and polar forms are linked by a = r cosθ and b = r sinθ — never confuse a with r.
- The conjugate z* = a − jb is z reflected across the real axis; the real part is unchanged.

*In the next section we will build on these representations to do more with complex-number operations and problem solving.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQgYW5kIGltYWdpbmFyeSBwYXJ0IGZyb20gcmVjdGFuZ3VsYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA3IC0gM2osIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zIiwiQi4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zaiIsIkMuIFJlKHopID0gLTMgYW5kIEltKHopID0gNyIsIkQuIFJlKHopID0gN2ogYW5kIEltKHopID0gLTMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudC1mcmVlIHJlYWwgbnVtYmVyIGEsIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IGIuIEhlcmUgYSA9IDcgYW5kIGIgPSAtMy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJJbSh6KSBpcyB0aGUgY29lZmZpY2llbnQgb2Ygaiwgbm90IHRoZSBmdWxsIHRlcm0gLTNqLiIsIkMiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMuIiwiRCI6IlRoZSByZWFsIHBhcnQgaXMgYSByZWFsIG51bWJlciwgbm90IDdqLiJ9LCJoaW50IjoiUmVhZCB6ID0gYSArIGpiIGJ5IHNlcGFyYXRpbmcgdGhlIHBsYWluIHJlYWwgbnVtYmVyIGZyb20gdGhlIGNvZWZmaWNpZW50IG9mIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gLTIgKyA1aiwgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIDVqLicgV2hhdCBpcyB0aGUgYmVzdCBjb3JyZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gQ29ycmVjdCwgYmVjYXVzZSB0aGUgaiBtdXN0IHN0YXkgYXR0YWNoZWQiLCJCLiBJbmNvcnJlY3Q7IHRoZSBpbWFnaW5hcnkgcGFydCBpcyA1LCB3aGlsZSA1aiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0iLCJDLiBJbmNvcnJlY3Q7IHRoZSBpbWFnaW5hcnkgcGFydCBpcyBqIiwiRC4gSW5jb3JyZWN0OyB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgLTIiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGlzIHRlc3RzIGEgY29tbW9uIG5vdGF0aW9uIHRyYXAuIFRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgcmVhbCBjb2VmZmljaWVudCBvZiBqLCBzbyBJbSh6KSA9IDUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBjb25mdXNlcyB0aGUgaW1hZ2luYXJ5IHBhcnQgd2l0aCB0aGUgZnVsbCB0ZXJtLiIsIkMiOiJqIGlzIHRoZSB1bml0IG1hcmtlciwgbm90IHRoZSB2YWx1ZSBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwiRCI6IlRoYXQgaXMgdGhlIHJlYWwgcGFydC4ifSwiaGludCI6IkFzayB3aGF0IG51bWJlciBtdWx0aXBsaWVzIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJyZWN0YW5ndWxhcl9wb2xhcl9saW5rIiwibGFiZWwiOiJEaXN0aW5ndWlzaCBjb29yZGluYXRlcyBhLGIgZnJvbSBtYWduaXR1ZGUtYW5nbGUgZGF0YSByLM64IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDMgKyA0aiwgd2hpY2ggdmFsdWUgaXMgdGhlIG1hZ25pdHVkZSByPyIsIm9wdGlvbnMiOlsiQS4gMyIsIkIuIDQiLCJDLiA1IiwiRC4gNyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6Ik1hZ25pdHVkZSBpcyBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW46IHIgPSBzcXJ0KDNeMiArIDReMikgPSA1LiBUaGlzIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgcmVhbCBwYXJ0IDMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiMyBpcyB0aGUgcmVhbCBwYXJ0IGEsIG5vdCB0aGUgbWFnbml0dWRlLiIsIkIiOiI0IGlzIHRoZSBpbWFnaW5hcnkgcGFydCBiLCBub3QgdGhlIG1hZ25pdHVkZS4iLCJEIjoiNyBpcyB0aGUgc3VtIG9mIGNvb3JkaW5hdGVzLCB3aGljaCBpcyBpcnJlbGV2YW50IGhlcmUuIn0sImhpbnQiOiJVc2UgdGhlIFB5dGhhZ29yZWFuIHRoZW9yZW0sIG5vdCBzaW1wbGUgcmVhZGluZyBmcm9tIHRoZSBob3Jpem9udGFsIGF4aXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgd2l0aCBwb2ludCAoMyw0KSBhbmQgcmlnaHQtdHJpYW5nbGUgbGVncyB0byBheGVzIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBwYWlyIG9mIGVxdWF0aW9ucyBjb3JyZWN0bHkgbGlua3MgcmVjdGFuZ3VsYXIgYW5kIHBvbGFyIGRlc2NyaXB0aW9ucyBvZiB6PyIsIm9wdGlvbnMiOlsiQS4gYSA9IHIgc2luzrgsIGIgPSByIGNvc864IiwiQi4gYSA9IHIgY29zzrgsIGIgPSByIHNpbs64IiwiQy4gciA9IGEgY29zzrgsIGIgPSByIHNpbs64IiwiRC4gYSA9IGNvc864LCBiID0gc2luzrgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB0aGUgcmlnaHQtdHJpYW5nbGUgcGljdHVyZSwgdGhlIGhvcml6b250YWwgc2lkZSBpcyBhZGphY2VudCB0byDOuCwgc28gYSA9IHIgY29zzrg7IHRoZSB2ZXJ0aWNhbCBzaWRlIGlzIG9wcG9zaXRlLCBzbyBiID0gciBzaW7OuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHNpbmUgYW5kIGNvc2luZS4iLCJDIjoiciBpcyB0aGUgaHlwb3RlbnVzZSwgbm90IGEgcHJvamVjdGlvbiBvZiBhLiIsIkQiOiJUaGlzIHdvdWxkIG9ubHkgZml0IHRoZSBzcGVjaWFsIGNhc2UgciA9IDEuIn0sImhpbnQiOiJUaGluayBhZGphY2VudCA9IGNvc2luZSwgb3Bwb3NpdGUgPSBzaW5lLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiByaWdodCB0cmlhbmdsZSBvbiBjb21wbGV4IHBsYW5lIGxhYmVsZWQgYSwgYiwgciwgzrgiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTMiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkV4cGxhaW4gd2h5IHRoZSBzdGF0ZW1lbnQgJ2ZvciB6ID0gYSArIGpiLCB0aGUgbWFnbml0dWRlIGlzIHIgPSBhJyBpcyBnZW5lcmFsbHkgZmFsc2UuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIHJlYWwgcGFydCBhIGlzIG9ubHkgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQuIFRoZSBtYWduaXR1ZGUgciBpcyB0aGUgZnVsbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIHNvIGluIGdlbmVyYWwgciA9IHNxcnQoYV4yICsgYl4yKS4gVGhleSBhcmUgZXF1YWwgb25seSBpbiBzcGVjaWFsIGNhc2VzIHN1Y2ggYXMgYiA9IDAgd2l0aCBhIG5vbm5lZ2F0aXZlLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBhIGlzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgLyByZWFsIHBhcnQiLCJNdXN0IHN0YXRlIHRoYXQgciBpcyBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4iLCJNdXN0IGluY2x1ZGUgb3IgY29ycmVjdGx5IGRlc2NyaWJlIHIgPSBzcXJ0KGFeMiArIGJeMikiLCJNYXkgbWVudGlvbiB0aGUgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZXkgY29pbmNpZGUiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGRpcmVjdGx5IGNoZWNrcyB0aGUgc3R1ZGVudCdzIHdlYWtlc3QgY29uZnVzaW9uOiBtaXhpbmcgdXAgY29vcmRpbmF0ZSB2YWx1ZSB3aXRoIG1hZ25pdHVkZS4iLCJoaW50IjoiQ29tcGFyZSBhIHBvaW50IG9uIHRoZSBheGlzIHdpdGggYSBwb2ludCBvZmYgdGhlIGF4aXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiY29uanVnYXRlX2dlb21ldHJ5IiwibGFiZWwiOiJJbnRlcnByZXQgdGhlIGNvbXBsZXggY29uanVnYXRlIGdlb21ldHJpY2FsbHkiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gYSArIGpiLCB3aGF0IGlzIGl0cyBjb21wbGV4IGNvbmp1Z2F0ZT8iLCJvcHRpb25zIjpbIkEuIC1hICsgamIiLCJCLiBhIC0gamIiLCJDLiAtYSAtIGpiIiwiRC4gYiArIGphIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ29uanVnYXRpb24gbGVhdmVzIHRoZSByZWFsIHBhcnQgdW5jaGFuZ2VkIGFuZCByZXZlcnNlcyB0aGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBmbGlwcyB0aGUgcmVhbCBwYXJ0LCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0LiIsIkMiOiJUaGlzIGZsaXBzIGJvdGggcGFydHMsIHdoaWNoIGlzIG5vdCBjb25qdWdhdGlvbi4iLCJEIjoiVGhpcyBzd2FwcyBjb29yZGluYXRlcyBlbnRpcmVseS4ifSwiaGludCI6IlJlZmxlY3QgYWNyb3NzIHRoZSByZWFsIGF4aXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgc2hvd2luZyB6IGFuZCB6KiBtaXJyb3JlZCBhY3Jvc3MgcmVhbCBheGlzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
