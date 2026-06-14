%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBhbGdlYnJhaWMsIHNvIExhVGVYLW5hdGl2ZSBmb3JtdWxhIGJsb2NrcyBzaG91bGQgY2FycnkgdGhlIG1haW4gdGVhY2hpbmcuIFRoZSBvbmx5IGhpZ2gtdmFsdWUgdmlzdWFsIG5lZWQgaXMgdGhlIHotcGxhbmUgaW50ZXJwcmV0YXRpb24gb2YgY29tcGxleC1jb25qdWdhdGUgcG9sZXMsIHdoZXJlIGEgc3RhbmRhcmQgcG9sZS16ZXJvIG9yIGNvbXBsZXgtcGxhbmUgcmVmZXJlbmNlIHZpc3VhbCBoZWxwcyBzdHVkZW50cyBzZWUgd2h5IGNvbmp1Z2F0ZSBwb2xlcyBjb21iaW5lIGludG8gYSByZWFsIGNvc2luZSB0ZXJtLiBObyB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIHJlY29nbml6ZSBjb25qdWdhdGUgcG9sZXMgcXVpY2tseSBhbmQgdHJpZ2dlciB0aGUgY29zaW5lLWZvcm0gaW52ZXJzZSB0YWJsZSBlbnRyeS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIHRvIGNvbm5lY3QgcG9sZSBsb2NhdGlvbiwgbWFnbml0dWRlLCBhbmdsZSwgYW5kIHRoZSByZXN1bHRpbmcgZXhwb25lbnRpYWwtY29zaW5lIHNlcXVlbmNlLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGNhdGNoIHNpZ24sIGFuZ2xlLCBhbmQgY29uanVnYXRlLXBhaXIgdHJhcHMgd2hlbiBjaG9vc2luZyBiZXR3ZWVuIGZpcnN0LW9yZGVyIGFuZCBxdWFkcmF0aWMtZmFjdG9yIG1ldGhvZHMuIn0=" style="display:none;"></div>%%KC_END%%
# Inverse Transform by Partial Fraction Expansion and Tables

> **Section Objective:** Find inverse z-transforms of rational functions by rewriting them into table-ready partial fractions.

---

**Concepts In This Section**

- Modified partial fractions
- Table lookup form
- Repeated poles
- Complex-conjugate poles
- Quadratic-factor method

## 1. Why Expand X[z]/z Instead of X[z]?

Expanding \(X[z]\) directly often produces terms like \(1/(z-a)\), which match table entries that return \(a^{n-1}u[n-1]\) — correct, but awkward. The textbook recommends dividing by \(z\) first, expanding \(X[z]/z\) into partial fractions, then multiplying every term back by \(z\). This creates terms of the form \(z/(z-a)\), which map cleanly to \(a^n u[n]\).

### WHY THIS MATTERS

In Example 5.3(a), the same transform can be written as a sum involving \(u[n-1]\) (direct expansion) or as a cleaner combination of \(u[n]\) and a delta term (modified expansion). Both are mathematically equivalent, but the modified form is far easier to read and verify.

#### Workflow
Divide by \(z\) → expand \(X[z]/z\) → multiply each term by \(z\) → look up each \(z/(z-a)\) in the table.

## 2. Repeated poles need repeated partial-fraction terms

This is the core table pattern that makes modified partial fractions useful.

- **\(a\)**: the pole location in the z-plane.
- **\(z\)**: the transform variable; the numerator \(z\) is the key feature.
- **\(u[n]\)**: the unit step — the sequence is causal, starting at \(n=0\).
- **\(a^n u[n]\)**: the causal exponential sequence returned by the table.

**When to use it:** After rewriting each partial-fraction term so that \(z\) appears in the numerator.

**Exam trigger:** A rational \(X[z]\) with factors such as \((z-a)\) in the denominator.

**Common misuse:** Matching \(1/(z-a)\) as if it were \(z/(z-a)\). The missing numerator \(z\) shifts the answer to \(a^{n-1}u[n-1]\), not \(a^n u[n]\).

$$\mathcal{Z}^{-1}\left\{\frac{z}{z-a}\right\} = a^n\, u[n]$$

## 3. Complex-conjugate poles become real cosine terms

When a denominator contains \((z-a)^m\), the partial-fraction expansion must include a separate term for every power from \((z-a)^m\) down to \((z-a)^1\). Skipping any intermediate power leaves the system of equations underdetermined.

In Example 5.3(b), the denominator has a pole at \(z=2\) of order 3. The expansion of \(X[z]/z\) must therefore include terms over \((z-2)^3\), \((z-2)^2\), and \((z-2)\) — three separate terms for one repeated pole.

### EXAM TIP

Missing even one of these terms makes the coefficient-solving system incomplete, and the resulting coefficients will be wrong.

#### Near-Miss
Writing only \(A/(z-2)^3\) for a third-order pole is not enough. You need all three denominator powers to match the original numerator.

$$\frac{X[z]}{z} = \frac{k}{z-1} + \frac{a_0}{(z-2)^3} + \frac{a_1}{(z-2)^2} + \frac{a_2}{z-2}$$
*This is the repeated-pole template from Example 5.3(b).

- **\(k\)**: coefficient for the simple pole at \(z=1\).
- **\(a_0, a_1, a_2\)**: three independent coefficients for the third-order repeated pole at \(z=2\).

**When to use it:** Whenever the denominator contains a repeated factor \((z-a)^m\) with \(m \geq 2\).

**Exam trigger:** Denominator powers such as \((z-2)^3\) signal a repeated pole of order 3.

**Common misuse:** Skipping lower powers like \((z-2)^2\) or \((z-2)\) removes necessary degrees of freedom and makes it impossible to solve for all coefficients correctly.

After finding all coefficients, multiply every term by \(z\) to restore the \(z/(z-a)^k\) form needed for table lookup.*

## 3. Complex-Conjugate Poles Become Real Cosine Terms

Real rational z-transforms often have complex poles that appear in conjugate pairs. In Example 5.3(c), the quadratic factor \(z^2 - 6z + 25\) has roots at \(3 + j4\) and \(3 - j4\) — a conjugate pair.

### KEY INSIGHT

Although each pole is complex, the pair always combines into a single **real** exponentially scaled cosine term in the time domain. You never need to leave complex numbers in the final answer.

### TWO METHODS

The textbook presents two algebraic routes:

- **Method of First-Order Factors**: treat each complex pole separately, find complex coefficients, then combine the conjugate terms into a real cosine expression.
- **Method of Quadratic Factors**: keep the quadratic \(z^2 - 6z + 25\) intact in the denominator and match a cosine-form table entry directly.

Both methods produce the **same final \(x[n]\)**. The quadratic method avoids complex arithmetic in intermediate steps, which many students find cleaner.


$$\text{Im}(z)\text{-axis}\quad\uparrow$$

$$\bullet\;3+j4\quad(r=5,\;\beta=+0.927\text{ rad})$$

$$\longleftarrow\text{real axis}\longrightarrow$$

$$\bullet\;3-j4\quad(r=5,\;\beta=-0.927\text{ rad})$$
***Z-plane sketch of the conjugate pole pair from Example 5.3(c).**

- Both poles lie at distance \(r = \sqrt{3^2+4^2} = 5\) from the origin.
- The upper pole has angle \(+\beta = \arctan(4/3) \approx 0.927\) rad; the lower pole has angle \(-\beta\).
- The mirror symmetry across the real axis is what guarantees the inverse transform is real-valued.

When you see this pattern, immediately reach for the exponential-cosine table entry.*

$$x[n] = \left[2 + 3.2\,(5)^n \cos(0.927n - 2.246)\right]u[n]$$
*This is the final inverse z-transform for Example 5.3(c), obtained by either the Method of First-Order Factors or the Method of Quadratic Factors.

- **\(5\)**: the magnitude of the complex pole \(3+j4\), i.e. \(r = |3+j4| = 5\).
- **\(0.927\)**: the pole angle \(\beta = \arctan(4/3)\) in radians, which becomes the cosine frequency.
- **\(-2.246\)**: the phase term determined by coefficient matching — this is **not** the same as the pole angle.
- **\(3.2\)**: the amplitude coefficient found from the partial-fraction numerator.

**When to use this pattern:** Whenever a rational \(X[z]\) contains complex-conjugate poles.

**Exam trigger:** A quadratic factor such as \(z^2 - 6z + 25\) with nonreal roots signals a conjugate pair.

**Common misuse:** Treating the two complex poles as two separate complex-valued outputs and leaving the answer in complex form. The conjugate pair must be combined into one real cosine expression.*

---
**📌 Key Takeaways**
- **Modified workflow:** expand \(X[z]/z\) into partial fractions, then multiply every term by \(z\) before table lookup.
- **Core table entry:** \(\mathcal{Z}^{-1}\{z/(z-a)\} = a^n u[n]\) — the numerator \(z\) is essential.
- **Direct-expansion warning:** \(\mathcal{Z}^{-1}\{1/(z-a)\} = a^{n-1}u[n-1]\) — missing \(z\) shifts the sequence by one.
- **Repeated-pole template:** a factor \((z-a)^m\) requires terms over all powers \((z-a)^m, (z-a)^{m-1}, \ldots, (z-a)^1\).
- **Complex-conjugate poles:** a pair such as \(3 \pm j4\) always combines into one real exponential-cosine term \(r^n \cos(\beta n + \theta)\, u[n]\).
- **Two methods, same answer:** Method of First-Order Factors and Method of Quadratic Factors both yield the identical real \(x[n]\).

*Next, you will use power series expansion as another route to inverse z-transforms.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Im1vZGlmaWVkX3BhcnRpYWxfZnJhY3Rpb25fd29ya2Zsb3ciLCJsYWJlbCI6IkV4cGFuZCBYW3pdL3ogYmVmb3JlIHRhYmxlIGxvb2t1cCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGRvZXMgdGhlIHRleHRib29rIHJlY29tbWVuZCBleHBhbmRpbmcgXFwoWFt6XS96XFwpIGluc3RlYWQgb2YgZXhwYW5kaW5nIFxcKFhbel1cXCkgZGlyZWN0bHk/Iiwib3B0aW9ucyI6WyJBLiBJdCBtYWtlcyB0aGUgZGVub21pbmF0b3IgaGF2ZSBmZXdlciBwb2xlcy4iLCJCLiBJdCBjcmVhdGVzIHRlcm1zIHdpdGggXFwoelxcKSBpbiB0aGUgbnVtZXJhdG9yLCB3aGljaCBtYXRjaCBjb21tb24gXFwodVtuXVxcKSB0YWJsZSBlbnRyaWVzLiIsIkMuIEl0IHJlbW92ZXMgYWxsIGltcHVsc2UgdGVybXMgZnJvbSB0aGUgYW5zd2VyLiIsIkQuIEl0IGF2b2lkcyBzb2x2aW5nIGZvciBwYXJ0aWFsLWZyYWN0aW9uIGNvZWZmaWNpZW50cy4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJFeHBhbmRpbmcgXFwoWFt6XS96XFwpIGFuZCB0aGVuIG11bHRpcGx5aW5nIGJ5IFxcKHpcXCkgY3JlYXRlcyB0ZXJtcyBsaWtlIFxcKHovKHotYSlcXCksIHdoaWNoIG1hcCBjbGVhbmx5IHRvIFxcKGFebiB1W25dXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBwb2xlIGxvY2F0aW9ucyBkbyBub3QgZGlzYXBwZWFyIGp1c3QgYmVjYXVzZSBcXChYW3pdL3pcXCkgaXMgZXhwYW5kZWQuIiwiQyI6IkltcHVsc2UgdGVybXMgY2FuIHN0aWxsIGFwcGVhciwgZXNwZWNpYWxseSBmcm9tIGNvbnN0YW50IHRlcm1zLiIsIkQiOiJZb3Ugc3RpbGwgbXVzdCBzb2x2ZSBmb3IgY29lZmZpY2llbnRzLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIG51bWVyYXRvciBwYXR0ZXJuIHVzZWQgaW4gdGhlIHotdHJhbnNmb3JtIHRhYmxlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggdGFibGUgcGF0dGVybiBpcyB0aGUgbWFpbiByZWFzb24gbW9kaWZpZWQgcGFydGlhbCBmcmFjdGlvbnMgYXJlIGNvbnZlbmllbnQ/Iiwib3B0aW9ucyI6WyJBLiBcXCh6Lyh6LWEpXFwpIG1hcHMgdG8gXFwoYV5uIHVbbl1cXCkuIiwiQi4gXFwoMS8oei1hKVxcKSBtYXBzIHRvIFxcKGFebiB1W25dXFwpLiIsIkMuIFxcKHovKHotYSlcXCkgbWFwcyB0byBcXChhXntuLTF9dVtuLTFdXFwpLiIsIkQuIFxcKHotYVxcKSBtYXBzIHRvIFxcKGFebiB1W25dXFwpLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBtb2RpZmllZCBmb3JtIGFpbXMgZm9yIFxcKHovKHotYSlcXCksIHdob3NlIGludmVyc2UgaXMgXFwoYV5uIHVbbl1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBvbWl0cyB0aGUgbnVtZXJhdG9yIFxcKHpcXCkgYW5kIHVzdWFsbHkgY29ycmVzcG9uZHMgdG8gYSBzaGlmdGVkIFxcKHVbbi0xXVxcKSBwYXR0ZXJuLiIsIkMiOiJUaGF0IGNvbmZ1c2VzIHRoZSBtb2RpZmllZCB0YWJsZSBwYXR0ZXJuIHdpdGggdGhlIHNoaWZ0ZWQgZGlyZWN0LWV4cGFuc2lvbiBwYXR0ZXJuLiIsIkQiOiJBIHBvbHlub21pYWwgZmFjdG9yIFxcKHotYVxcKSBpcyBub3QgdGhlIHJlY2lwcm9jYWwgcmF0aW9uYWwgdGFibGUgZW50cnkuIn0sImhpbnQiOiJUaGUgbnVtZXJhdG9yIFxcKHpcXCkgaXMgdGhlIGtleSBmZWF0dXJlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiZGlyZWN0X3ZzX21vZGlmaWVkX2Zvcm0iLCJsYWJlbCI6InVbbl0gZm9ybSB2ZXJzdXMgdVtuLTFdIGZvcm0iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgZXhwYW5kcyBcXChYW3pdXFwpIGRpcmVjdGx5IGFuZCBnZXRzIGFuIGFuc3dlciBtdWx0aXBsaWVkIGJ5IFxcKHVbbi0xXVxcKS4gV2hhdCBpcyB0aGUgYmVzdCBpbnRlcnByZXRhdGlvbj8iLCJvcHRpb25zIjpbIkEuIFRoZSBhbnN3ZXIgaXMgYXV0b21hdGljYWxseSB3cm9uZy4iLCJCLiBUaGUgYW5zd2VyIG1heSBiZSBjb3JyZWN0LCBidXQgdGhlIG1vZGlmaWVkIFxcKFhbel0velxcKSBtZXRob2QgdXN1YWxseSBnaXZlcyBhIGNsZWFuZXIgXFwodVtuXVxcKSBmb3JtLiIsIkMuIFRoZSB6LXRyYW5zZm9ybSB0YWJsZSBjYW5ub3QgYmUgdXNlZC4iLCJELiBUaGUgdHJhbnNmb3JtIG11c3QgaGF2ZSBjb21wbGV4IHBvbGVzLiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSB0ZXh0Ym9vayBub3RlcyB0aGF0IGRpcmVjdCBleHBhbnNpb24gY2FuIGdpdmUgYSBjb3JyZWN0IGJ1dCBhd2t3YXJkIFxcKHVbbi0xXVxcKSBmb3JtOyBtb2RpZmllZCBleHBhbnNpb24gaXMgcHJlZmVycmVkIGZvciBhIGNsZWFuZXIgXFwodVtuXVxcKSBhbnN3ZXIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHNoaWZ0ZWQgZm9ybSBjYW4gc3RpbGwgYmUgZXF1aXZhbGVudC4iLCJDIjoiVGhlIHRhYmxlIGlzIHN0aWxsIGJlaW5nIHVzZWQ7IHRoZSBpc3N1ZSBpcyB3aGljaCB0YWJsZSBlbnRyeSBpcyBtYXRjaGVkLiIsIkQiOiJUaGlzIGlzc3VlIGNhbiBvY2N1ciB3aXRoIHJlYWwgcG9sZXMgdG9vLiJ9LCJoaW50IjoiVGhlIHRleHRib29rIGNvbXBhcmVzIEVxLiAoNS44KSBhbmQgRXEuICg1LjkpIGZvciB0aGlzIHJlYXNvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJyZXBlYXRlZF9wb2xlcyIsImxhYmVsIjoiUmVwZWF0ZWQtcG9sZSBwYXJ0aWFsIGZyYWN0aW9uIHRlbXBsYXRlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBcXChYW3pdL3pcXCkgaGFzIGEgZGVub21pbmF0b3IgZmFjdG9yIFxcKCh6LTIpXjNcXCksIHdoaWNoIHNldCBvZiBwYXJ0aWFsLWZyYWN0aW9uIHRlcm1zIGlzIHJlcXVpcmVkIGZvciB0aGF0IHJlcGVhdGVkIHBvbGU/Iiwib3B0aW9ucyI6WyJBLiBcXChBLyh6LTIpXjNcXCkgb25seSIsIkIuIFxcKEEvKHotMileMyArIEIvKHotMileMiArIEMvKHotMilcXCkiLCJDLiBcXChBLyh6LTIpXFwpIG9ubHkiLCJELiBcXChBKHotMileMyArIEIoei0yKV4yICsgQyh6LTIpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQSB0aGlyZC1vcmRlciByZXBlYXRlZCBwb2xlIHJlcXVpcmVzIHRlcm1zIGZvciBldmVyeSBkZW5vbWluYXRvciBwb3dlciBkb3duIHRvIHRoZSBmaXJzdCBwb3dlci4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIG9taXRzIHRoZSBsb3dlci1wb3dlciB0ZXJtcyBuZWVkZWQgdG8gcmVwcmVzZW50IHRoZSByYXRpb25hbCBmdW5jdGlvbi4iLCJDIjoiVGhpcyB0cmVhdHMgYSB0aGlyZC1vcmRlciBwb2xlIGFzIGlmIGl0IHdlcmUgc2ltcGxlLiIsIkQiOiJQYXJ0aWFsIGZyYWN0aW9ucyB1c2UgcmVjaXByb2NhbCBkZW5vbWluYXRvciBwb3dlcnMsIG5vdCBwb3NpdGl2ZSBwb3dlcnMuIn0sImhpbnQiOiJSZXBlYXRlZCBwb2xlIG1lYW5zIGEgc3RhY2sgb2YgZGVub21pbmF0b3IgcG93ZXJzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgd3JpdGVzIG9ubHkgXFwoQS8oei0yKV4zXFwpIGZvciBhIHJlcGVhdGVkIHBvbGUgb2Ygb3JkZXIgMy4gRXhwbGFpbiBwcmVjaXNlbHkgd2h5IHRoaXMgaXMgaW5jb21wbGV0ZS4iLCJpZGVhbF9hbnN3ZXIiOiJBIHBvbGUgb2Ygb3JkZXIgMyBuZWVkcyBzZXBhcmF0ZSB0ZXJtcyBvdmVyIFxcKCh6LTIpXjNcXCksIFxcKCh6LTIpXjJcXCksIGFuZCBcXCgoei0yKVxcKS4gVXNpbmcgb25seSBcXChBLyh6LTIpXjNcXCkgZG9lcyBub3QgcHJvdmlkZSBlbm91Z2ggY29lZmZpY2llbnRzIHRvIG1hdGNoIHRoZSBvcmlnaW5hbCBudW1lcmF0b3IuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBtZW50aW9uIGFsbCByZXF1aXJlZCBwb3dlcnM6IHRoaXJkLCBzZWNvbmQsIGFuZCBmaXJzdC4iLCJNdXN0IGV4cGxhaW4gdGhhdCBjb2VmZmljaWVudCBtYXRjaGluZyBuZWVkcyBlbm91Z2ggZGVncmVlcyBvZiBmcmVlZG9tLiIsIk11c3QgaWRlbnRpZnkgdGhlIG1pc3Rha2UgYXMgYW4gaW5jb21wbGV0ZSByZXBlYXRlZC1wb2xlIGV4cGFuc2lvbi4iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBzdHJ1Y3R1cmUsIG5vdCBqdXN0IHRoZSBub3RhdGlvbi4iLCJoaW50IjoiQXNrIGhvdyBtYW55IGluZGVwZW5kZW50IGNvZWZmaWNpZW50cyBhcmUgbmVlZGVkIGZvciBhIHRoaXJkLW9yZGVyIHJlcGVhdGVkIGZhY3Rvci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImNvbXBsZXhfY29uanVnYXRlX3BvbGVzIiwibGFiZWwiOiJDb21wbGV4LWNvbmp1Z2F0ZSBwb2xlcyBhbmQgY29zaW5lIGZvcm0iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlRoZSBxdWFkcmF0aWMgXFwoel4yIC0gNnogKyAyNVxcKSBmYWN0b3JzIGludG8gcG9sZXMgYXQgXFwoMytqNFxcKSBhbmQgXFwoMy1qNFxcKS4gV2hhdCBzaG91bGQgdGhpcyBwb2xlIHBhaXIgdHJpZ2dlcj8iLCJvcHRpb25zIjpbIkEuIFR3byB1bnJlbGF0ZWQgY29tcGxleC12YWx1ZWQgdGltZSBzaWduYWxzIG11c3QgcmVtYWluIGluIHRoZSBhbnN3ZXIuIiwiQi4gQSByZWFsIGNvc2luZS1mb3JtIHNlcXVlbmNlIGFmdGVyIGNvbWJpbmluZyB0aGUgY29uanVnYXRlIHRlcm1zLiIsIkMuIEEgcmVwZWF0ZWQgcmVhbCBwb2xlIGF0IFxcKHo9M1xcKS4iLCJELiBBbiBpbXB1bHNlLW9ubHkgdGltZSBzZXF1ZW5jZS4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJDb21wbGV4LWNvbmp1Z2F0ZSBwb2xlIHBhaXJzIGNvbWJpbmUgaW50byBhIHJlYWwgZXhwb25lbnRpYWxseSBzY2FsZWQgY29zaW5lIHRlcm0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRm9yIHJlYWwtY29lZmZpY2llbnQgdHJhbnNmb3JtcywgY29uanVnYXRlIHRlcm1zIGNvbWJpbmUgaW50byBhIHJlYWwgc2VxdWVuY2UuIiwiQyI6IlRoZSBwb2xlcyBhcmUgbm9ucmVhbCBhbmQgZGlzdGluY3QsIG5vdCBhIHJlcGVhdGVkIHJlYWwgcG9sZS4iLCJEIjoiQ29tcGxleCBwb2xlcyBkbyBub3QgaW1wbHkgaW1wdWxzZS1vbmx5IGJlaGF2aW9yLiJ9LCJoaW50IjoiQ29uanVnYXRlIHN5bW1ldHJ5IGlzIHRoZSBjbHVlLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ6X3BsYW5lX2Nvbmp1Z2F0ZV9wb2xlX3Bsb3QiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDRfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkNvbnNpZGVyIHBvbGVzIGF0IFxcKDMrajRcXCkgYW5kIFxcKDMtajRcXCkgaW4gdGhlIHotcGxhbmUuIFdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHBvbGVzIGhhdmUgZXF1YWwgbWFnbml0dWRlIGFuZCBvcHBvc2l0ZSBhbmdsZXMuIiwiQi4gVGhlIHBvbGVzIGhhdmUgZGlmZmVyZW50IG1hZ25pdHVkZXMgYW5kIGVxdWFsIGFuZ2xlcy4iLCJDLiBCb3RoIHBvbGVzIGxpZSBvbiB0aGUgcmVhbCBheGlzLiIsIkQuIFRoZSBsb3dlciBwb2xlIGhhcyBubyBlZmZlY3Qgb24gdGhlIHRpbWUtZG9tYWluIHNpZ25hbC4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJDb25qdWdhdGUgcG9sZXMgbWlycm9yIGFjcm9zcyB0aGUgcmVhbCBheGlzLCBzbyB0aGVpciBtYWduaXR1ZGVzIG1hdGNoIChib3RoIGVxdWFsIFxcKDVcXCkpIGFuZCB0aGVpciBhbmdsZXMgaGF2ZSBvcHBvc2l0ZSBzaWducyAoXFwoKzAuOTI3XFwpIHJhZCBhbmQgXFwoLTAuOTI3XFwpIHJhZCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiQ29uanVnYXRlcyBoYXZlIGVxdWFsIG1hZ25pdHVkZSwgbm90IGRpZmZlcmVudCBtYWduaXR1ZGVzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnRzIGFyZSBcXCgrNFxcKSBhbmQgXFwoLTRcXCksIHNvIHRoZXkgYXJlIG5vdCBvbiB0aGUgcmVhbCBheGlzLiIsIkQiOiJCb3RoIHBvbGVzIGFyZSBuZWVkZWQgdG8gZm9ybSB0aGUgcmVhbCBjb3NpbmUgdGVybS4ifSwiaGludCI6Ik1pcnJvciBzeW1tZXRyeSBhY3Jvc3MgdGhlIHJlYWwgYXhpcyBwcmVzZXJ2ZXMgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ6X3BsYW5lX2Nvbmp1Z2F0ZV9wb2xlX3Bsb3QiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Im1ldGhvZF9jaG9pY2UiLCJsYWJlbCI6IkZpcnN0LW9yZGVyIGZhY3RvcnMgdmVyc3VzIHF1YWRyYXRpYyBmYWN0b3JzIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHRoZSBjb21wbGV4LXBvbGUgZXhhbXBsZSBpbiB0aGlzIHNlY3Rpb24sIHdoYXQgaXMgdHJ1ZSBhYm91dCB0aGUgTWV0aG9kIG9mIEZpcnN0LU9yZGVyIEZhY3RvcnMgYW5kIHRoZSBNZXRob2Qgb2YgUXVhZHJhdGljIEZhY3RvcnM/Iiwib3B0aW9ucyI6WyJBLiBUaGV5IGdpdmUgZGlmZmVyZW50IGludmVyc2Ugei10cmFuc2Zvcm1zIGJlY2F1c2Ugb25lIHVzZXMgY29tcGxleCBudW1iZXJzIGFuZCB0aGUgb3RoZXIgZG9lcyBub3QuIiwiQi4gVGhleSBhcmUgdHdvIGFsZ2VicmFpYyByb3V0ZXMgdG8gdGhlIHNhbWUgZmluYWwgXFwoeFtuXVxcKS4iLCJDLiBUaGUgcXVhZHJhdGljIG1ldGhvZCBvbmx5IHdvcmtzIGZvciByZXBlYXRlZCByZWFsIHBvbGVzLiIsIkQuIFRoZSBmaXJzdC1vcmRlciBtZXRob2QgYXZvaWRzIHBhcnRpYWwgZnJhY3Rpb25zIGVudGlyZWx5LiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSB0ZXh0Ym9vayBzaG93cyBib3RoIG1ldGhvZHMgbGVhZGluZyB0byB0aGUgc2FtZSByZWFsIGNvc2luZS1mb3JtIGludmVyc2UgdHJhbnNmb3JtLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkRpZmZlcmVudCBpbnRlcm1lZGlhdGUgZm9ybXMgY2FuIHN0aWxsIHNpbXBsaWZ5IHRvIHRoZSBzYW1lIHJlYWwgc2VxdWVuY2UuIiwiQyI6IlRoZSBxdWFkcmF0aWMgbWV0aG9kIGlzIHNwZWNpZmljYWxseSB1c2VmdWwgZm9yIGNvbmp1Z2F0ZSBxdWFkcmF0aWMgZmFjdG9ycy4iLCJEIjoiVGhlIGZpcnN0LW9yZGVyIG1ldGhvZCBzdGlsbCB1c2VzIHBhcnRpYWwgZnJhY3Rpb25zLiJ9LCJoaW50IjoiQ29tcGFyZSB0aGUgZmluYWwgXFwoeFtuXVxcKSBmcm9tIGJvdGggbWV0aG9kcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
