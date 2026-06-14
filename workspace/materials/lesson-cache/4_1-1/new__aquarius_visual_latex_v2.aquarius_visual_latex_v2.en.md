%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBzeW1ib2xpYyBwYXJ0aWFsLWZyYWN0aW9uIG1lY2hhbmljcywgc28gZXhhY3QgTGFUZVggZm9ybXVsYXMgc2hvdWxkIGNhcnJ5IHRoZSBtYWluIHRlYWNoaW5nIGxvYWQuIFRoZSBvbmUgY29uY2VwdCB0aGF0IHN0cm9uZ2x5IGJlbmVmaXRzIGZyb20gYSB2aXN1YWwgaXMgdGhlIGNvbXBsZXgtcGxhbmUgYW5nbGUgdHJhcDogdGFuXnstMX0oNC8tMykgaXMgbm90IHRoZSBzYW1lIHF1YWRyYW50IGFzIHRhbl57LTF9KC00LzMpLiBTaW5jZSBubyBjcm9wcGVkIHRleHRib29rIGZpZ3VyZSBpcyBhdmFpbGFibGUsIHVzZSBhIFdpa2lwZWRpYS9XaWtpbWVkaWEgY29tcGxleC1wbGFuZSBvciBhcmd1bWVudCBkaWFncmFtIHJhdGhlciB0aGFuIGdlbmVyYXRpbmcgYSBuZXcgaW1hZ2UuIiwiY3JhbSI6IlVzZSBmb3JtdWxhcyBhbmQgdGhlIHF1YWRyYW50IHZpc3VhbCB0byByZWNvZ25pemUgdGhlIG1hdGNoaW5nIGludmVyc2UtdHJhbnNmb3JtIHBhdHRlcm4gcXVpY2tseS4iLCJzdGFuZGFyZCI6IlVzZSBMYVRlWCBmb3JtdWxhcyBmb3IgZWFjaCBwYXJ0aWFsLWZyYWN0aW9uIGNhc2UgYW5kIHRoZSBjb21wbGV4LXBsYW5lIGltYWdlIHRvIGNsYXJpZnkgdGhlIGNvbmp1Z2F0ZS1wYWlyIGV4YW1wbGUuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gZXhwb3NlIHF1YWRyYW50LWFuZ2xlIHRyYXBzLCBhbmQgdXNlIGZvcm11bGEgcGFnZXMgdG8gZGlzdGluZ3Vpc2ggc2ltcGxlIHBvbGVzLCBpbXByb3BlciB0ZXJtcywgY29uanVnYXRlIHBvbGVzLCBhbmQgcmVwZWF0ZWQgcG9sZXMuIn0=" style="display:none;"></div>%%KC_END%%
# Finding the Inverse Transform

> **Section Objective:** Learn how to find inverse Laplace transforms by rewriting rational functions into partial fractions that match a transform table.

---

## Concepts In This Section

- Poles and zeros
- Partial fraction expansion
- First-order inverse pairs
- Improper rational functions and delta terms
- Complex conjugate poles
- Repeated poles
- MATLAB residue output

## 1. Poles and zeros tell you what partial fractions you need

Most practical inverse Laplace problems start with a rational function \(X(s) = P(s)/Q(s)\), where \(P(s)\) is the numerator polynomial and \(Q(s)\) is the denominator polynomial.

**Zeros** are the roots of \(P(s)\) — the values of \(s\) that make the numerator zero.

**Poles** are the roots of \(Q(s)\) — the values of \(s\) that make the denominator zero (and \(X(s)\) blow up).

**Minimal example:** For \(X(s) = (7s-6)/((s+2)(s-3))\), set each denominator factor to zero: \(s+2=0\) gives pole \(s=-2\); \(s-3=0\) gives pole \(s=3\).

The denominator factors directly reveal which partial-fraction terms you need — one term per pole.

#### Common Misuse
Do not call every denominator factor a pole without solving it equal to zero. The pole of \(s+2\) is \(s=-2\), not \(s=+2\).

$$X(s)=\frac{P(s)}{Q(s)}$$

## 2. Simple poles: use cover-up, then check once

Equation (4.11) is the textbook's model simple-pole expansion. The **cover-up method** finds each coefficient directly:

- To find the coefficient of \(1/(s+2)\): cover the factor \((s+2)\) in the original denominator, then substitute \(s=-2\) into what remains: \((7(-2)-6)/(-2-3) = (-20)/(-5) = 4\).
- To find the coefficient of \(1/(s-3)\): cover \((s-3)\) and substitute \(s=3\): \((7(3)-6)/(3+2) = 15/5 = 3\).

**Check:** Substitute any non-pole value such as \(s=0\) into both the original and the expansion. Original: \(-6/(-6) = 1\). Expansion: \(4/2 + 3/(-3) = 2-1 = 1\). They match.

**Exam trigger:** Distinct linear denominator factors always call for this method.

#### Common Misuse
Never check at a pole value like \(s=-2\) or \(s=3\) — \(X(s)\) is infinite there and the check is meaningless.

$$X(s)=\frac{7s-6}{(s+2)(s-3)}=\frac{4}{s+2}+\frac{3}{s-3}\quad (4.11)$$

## 3. Match each partial fraction to a table pair

After expansion, each term should match a known Laplace table entry. The fundamental first-order pair is \(k/(s-p) \leftrightarrow k e^{pt}u(t)\).

**From Eq. (4.11):**
- \(4/(s+2)\): rewrite as \(4/(s-(-2))\), so \(p=-2\) and the inverse is \(4e^{-2t}u(t)\).
- \(3/(s-3)\): here \(p=3\) and the inverse is \(3e^{3t}u(t)\).

**Improper case:** If long division leaves a constant term \(K\) in \(X(s)\), it transforms as:

$$\mathcal{L}^{-1}\{K\} = K\delta(t)$$

For example, a leading constant of \(2\) produces \(2\delta(t)\) in the time domain.

#### Common Misuse
Always include \(u(t)\) in unilateral Laplace-transform answers. Writing \(4e^{-2t}\) without \(u(t)\) is technically incomplete and loses marks on exams.

$$\mathcal{L}^{-1}\left\{\frac{k}{s-p}\right\}=k\,e^{pt}u(t)$$


## 4. Complex conjugate poles become a real damped cosine

Conjugate pole pairs always appear together, and their residues are also complex conjugates. The combined inverse transform is always real.

**Symbol guide:**
- \(r\) = residue magnitude
- \(\theta\) = residue angle (quadrant-corrected)
- \(a\) = positive damping constant in \(s+a\)
- \(b\) = oscillation frequency

**Textbook example:** Residues \(5e^{j126.9^\circ}\) and \(5e^{-j126.9^\circ}\) over poles \(s+5-j3\) and \(s+5+j3\) give:

$$x(t) = 10\,e^{-5t}\cos(3t+126.9^\circ)\,u(t)$$

Here \(2r = 2 \times 5 = 10\), \(a=5\), \(b=3\), and \(\theta = 126.9^\circ\).

**Exam trigger:** An irreducible quadratic denominator or a pair of complex conjugate roots.

#### Common Misuse
Using \(\tan^{-1}(-4/3)\) directly gives \(-53.1^\circ\) (quadrant IV), not the correct \(126.9^\circ\) (quadrant II). Always verify the quadrant from the signs of the residue's real and imaginary parts.

$$\frac{r e^{j\theta}}{s+a-jb}+\frac{r e^{-j\theta}}{s+a+jb}\;\longleftrightarrow\;2r\,e^{-at}\cos(bt+\theta)\,u(t)$$

## 5. Repeated poles create powers of t

When a denominator factor is raised to a power, you need a **separate partial-fraction term for each power** from 1 up to the maximum.

For example, \((s+2)^3\) requires three terms:

$$\frac{a_3}{(s+2)^3}+\frac{a_2}{(s+2)^2}+\frac{a_1}{s+2}$$

Each term maps to the repeated-pole formula above with its own \(m\).

**Minimal example:** For the term \(6/(s+2)^3\), use \(a_m=6\), \(a=2\), \(m=3\):

$$\mathcal{L}^{-1}\left\{\frac{6}{(s+2)^3}\right\} = 6\cdot\frac{t^2}{2!}\,e^{-2t}u(t) = 3t^2e^{-2t}u(t)$$

**MATLAB note:** The `residue` function reports residues and poles for repeated-pole terms, but you must still map each one to the correct \(m\) and apply the \((m-1)!\) factorial yourself.

**Exam trigger:** Any denominator factor raised to a power greater than 1.

#### Common Misuse
Treating all repeated-pole terms as plain exponentials (ignoring the \(t^{m-1}\) factor) is the most common error on exams.

$$\mathcal{L}^{-1}\left\{\frac{a_m}{(s+a)^m}\right\}=a_m\,\frac{t^{m-1}}{(m-1)!}\,e^{-at}u(t)$$

---
**📌 Key Takeaways**
- **Rational form:** \(X(s) = P(s)/Q(s)\); zeros are roots of \(P(s)\), poles are roots of \(Q(s)\).
- **Model simple-pole expansion (Eq. 4.11):** \(\displaystyle\frac{7s-6}{(s+2)(s-3)}=\frac{4}{s+2}+\frac{3}{s-3}\) — use cover-up and verify at a non-pole value.
- **First-order inverse pair:** \(\mathcal{L}^{-1}\{k/(s-p)\} = ke^{pt}u(t)\) — always include \(u(t)\).
- **Constant term (improper case):** \(\mathcal{L}^{-1}\{K\} = K\delta(t)\).
- **Conjugate-pair cosine formula:** \(\displaystyle\frac{re^{j\theta}}{s+a-jb}+\frac{re^{-j\theta}}{s+a+jb}\longleftrightarrow 2r\,e^{-at}\cos(bt+\theta)\,u(t)\) — quadrant-correct \(\theta\) is essential.
- **Repeated-pole formula:** \(\mathcal{L}^{-1}\{a_m/(s+a)^m\} = a_m\,t^{m-1}e^{-at}u(t)/(m-1)!\) — a third-order pole produces \(t^2/2!\).
- **Quadrant trap:** A residue \(-3+j4\) lies in quadrant II; its angle is \(126.9^\circ\), not \(-53.1^\circ\).
- **MATLAB residue:** Each pair \((r_i, p_i)\) gives \(r_i/(s-p_i)\); a non-empty \(k\) vector gives delta or derivative-of-delta terms.

*Next, these inverse-transform skills will support Laplace-transform properties such as time shifting.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InBvbGVzX3plcm9zX3JhdGlvbmFsX2Zvcm0iLCJsYWJlbCI6IklkZW50aWZ5IHBvbGVzIGFuZCB6ZXJvcyBmcm9tIGEgcmF0aW9uYWwgdHJhbnNmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgXFwoWChzKSA9ICg3cy02KS8oKHMrMikocy0zKSlcXCksIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHBvbGVzIGFyZSBcXChzPTJcXCkgYW5kIFxcKHM9LTNcXCkuIiwiQi4gVGhlIHBvbGVzIGFyZSBcXChzPS0yXFwpIGFuZCBcXChzPTNcXCkuIiwiQy4gVGhlIHplcm9zIGFyZSBcXChzPS0yXFwpIGFuZCBcXChzPTNcXCkuIiwiRC4gVGhlIG9ubHkgemVybyBpcyBcXChzPTBcXCkuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiUG9sZXMgY29tZSBmcm9tIHNldHRpbmcgZGVub21pbmF0b3IgZmFjdG9ycyBlcXVhbCB0byB6ZXJvOiBcXChzKzI9MFxcKSBnaXZlcyBcXChzPS0yXFwpLCBhbmQgXFwocy0zPTBcXCkgZ2l2ZXMgXFwocz0zXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgcmV2ZXJzZXMgdGhlIHNpZ25zIG9mIHRoZSByb290cy4iLCJDIjoiVGhvc2UgdmFsdWVzIGFyZSBkZW5vbWluYXRvciByb290cywgc28gdGhleSBhcmUgcG9sZXMsIG5vdCB6ZXJvcy4iLCJEIjoiVGhlIHplcm8gY29tZXMgZnJvbSBcXCg3cy02PTBcXCksIGdpdmluZyBcXChzPTYvN1xcKSwgbm90IFxcKHM9MFxcKS4ifSwiaGludCI6IlNldCBlYWNoIGRlbm9taW5hdG9yIGZhY3RvciBlcXVhbCB0byB6ZXJvLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InNpbXBsZV9wb2xlX3BhcnRpYWxfZnJhY3Rpb25zIiwibGFiZWwiOiJVc2UgY292ZXItdXAgZm9yIGRpc3RpbmN0IGxpbmVhciBmYWN0b3JzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBcXChYKHMpID0gKDdzLTYpLygocysyKShzLTMpKVxcKSwgd2hhdCBpcyB0aGUgY29lZmZpY2llbnQgb2YgXFwoMS8ocysyKVxcKT8iLCJvcHRpb25zIjpbIkEuIDQiLCJCLiAzIiwiQy4gLTQiLCJELiAtMyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkNvdmVyIFxcKHMrMlxcKSBhbmQgc3Vic3RpdHV0ZSBcXChzPS0yXFwpIGludG8gXFwoKDdzLTYpLyhzLTMpXFwpOiBcXCgoLTE0LTYpLygtMi0zKSA9ICgtMjApLygtNSkgPSA0XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IjMgaXMgdGhlIGNvZWZmaWNpZW50IG9mIFxcKDEvKHMtMylcXCksIG5vdCBcXCgxLyhzKzIpXFwpLiIsIkMiOiJCb3RoIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgYXJlIG5lZ2F0aXZlIGF0IFxcKHM9LTJcXCksIHNvIHRoZSByZXN1bHQgaXMgcG9zaXRpdmUuIiwiRCI6IlRoaXMgdXNlcyB0aGUgd3JvbmcgcG9sZSBhbmQgd3Jvbmcgc2lnbi4ifSwiaGludCI6IkZvciB0aGUgY29lZmZpY2llbnQgb2YgXFwoMS8ocysyKVxcKSwgc3Vic3RpdHV0ZSB0aGUgcm9vdCBcXChzPS0yXFwpIGFmdGVyIGNvdmVyaW5nIFxcKHMrMlxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3R1ZGVudCB3YW50cyB0byBjaGVjayBhIHBhcnRpYWwtZnJhY3Rpb24gYW5zd2VyIGZvciBcXChYKHMpID0gKDdzLTYpLygocysyKShzLTMpKVxcKS4gV2hpY2ggY2hlY2sgdmFsdWUgc2hvdWxkIHRoZXkgYXZvaWQ/Iiwib3B0aW9ucyI6WyJBLiBcXChzPTBcXCkiLCJCLiBcXChzPTFcXCkiLCJDLiBcXChzPS0yXFwpIiwiRC4gXFwocz00XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiXFwocz0tMlxcKSBpcyBhIHBvbGUsIHNvIFxcKFgocylcXCkgaXMgaW5maW5pdGUgdGhlcmUuIEEgY2hlY2sgbXVzdCB1c2UgYSBub24tcG9sZSB2YWx1ZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXChzPTBcXCkgaXMgYWxsb3dlZCBiZWNhdXNlIGl0IGlzIG5vdCBhIHBvbGUuIiwiQiI6IlxcKHM9MVxcKSBpcyBhbGxvd2VkIGJlY2F1c2UgaXQgaXMgbm90IGEgcG9sZS4iLCJEIjoiXFwocz00XFwpIGlzIGFsbG93ZWQgYmVjYXVzZSBpdCBpcyBub3QgYSBwb2xlLiJ9LCJoaW50IjoiRG8gbm90IHN1YnN0aXR1dGUgYSB2YWx1ZSB0aGF0IG1ha2VzIHRoZSBkZW5vbWluYXRvciB6ZXJvLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoidGFibGVfbWF0Y2hpbmdfaW52ZXJzZV9wYWlycyIsImxhYmVsIjoiQ29udmVydCBmaXJzdC1vcmRlciBhbmQgY29uc3RhbnQgdGVybXMgYmFjayB0byB0aW1lIGRvbWFpbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoWChzKSA9IDQvKHMrMikgKyAzLyhzLTMpXFwpLCB3aGF0IGlzIFxcKHgodClcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXCgoNGVeezJ0fSszZV57LTN0fSl1KHQpXFwpIiwiQi4gXFwoKDRlXnstMnR9KzNlXnszdH0pdSh0KVxcKSIsIkMuIFxcKDRcXGRlbHRhKHQpKzN1KHQpXFwpIiwiRC4gXFwoKDRlXnstMnR9LTNlXnszdH0pdSh0KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlVzZSBcXChcXG1hdGhjYWx7TH1eey0xfVxce2svKHMtcClcXH0gPSBrZV57cHR9dSh0KVxcKS4gSGVyZSBcXChzKzIgPSBzLSgtMilcXCkgc28gXFwocD0tMlxcKTsgXFwocy0zXFwpIGdpdmVzIFxcKHA9M1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHJldmVyc2VzIGJvdGggZXhwb25lbnQgc2lnbnMuIiwiQyI6IkEgZGVsdGEgdGVybSBhcHBlYXJzIGZvciBhIGNvbnN0YW50IGluIFxcKFgocylcXCksIG5vdCBmb3IgZmlyc3Qtb3JkZXIgZnJhY3Rpb25zLiIsIkQiOiJUaGUgY29lZmZpY2llbnQgb2YgdGhlIHNlY29uZCB0ZXJtIGlzIHBvc2l0aXZlIFxcKCszXFwpLCBub3QgbmVnYXRpdmUuIn0sImhpbnQiOiJSZXdyaXRlIGVhY2ggZGVub21pbmF0b3IgYXMgXFwocy1wXFwpIHRvIGlkZW50aWZ5IFxcKHBcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQW4gaW1wcm9wZXIgcmF0aW9uYWwgdHJhbnNmb3JtIGV4cGFuZHMgdG8gXFwoWChzKSA9IDIgKyA3LyhzKzEpIC0gMTMvKHMrMilcXCkuIFdoYXQgdGltZS1kb21haW4gdGVybSBjb21lcyBmcm9tIHRoZSBjb25zdGFudCAyPyIsIm9wdGlvbnMiOlsiQS4gXFwoMnUodClcXCkiLCJCLiBcXCgyZV57LXR9dSh0KVxcKSIsIkMuIFxcKDJcXGRlbHRhKHQpXFwpIiwiRC4gXFwoMnRcXCx1KHQpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQSBjb25zdGFudCBpbiB0aGUgTGFwbGFjZSBkb21haW4gY29ycmVzcG9uZHMgdG8gYW4gaW1wdWxzZSBpbiB0aW1lOiBcXChcXG1hdGhjYWx7TH1eey0xfVxcezJcXH0gPSAyXFxkZWx0YSh0KVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXCh1KHQpXFwpIGNvcnJlc3BvbmRzIHRvIFxcKDEvc1xcKSwgbm90IHRvIGEgY29uc3RhbnQuIiwiQiI6IlxcKGVeey10fXUodClcXCkgY29ycmVzcG9uZHMgdG8gXFwoMS8ocysxKVxcKS4iLCJEIjoiXFwodFxcLHUodClcXCkgY29ycmVzcG9uZHMgdG8gXFwoMS9zXjJcXCkuIn0sImhpbnQiOiJBc2sgd2hhdCB0cmFuc2Zvcm0gcGFpciBjb250YWlucyBubyBkZW5vbWluYXRvciBpbiBcXChzXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbXBsZXhfY29uanVnYXRlX3BhaXIiLCJsYWJlbCI6IkhhbmRsZSBjb21wbGV4IGNvbmp1Z2F0ZSBwb2xlIHBhaXJzIGFuZCBhbmdsZSBxdWFkcmFudHMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcmVzaWR1ZSBpcyBcXCgtMytqNFxcKS4gV2hpY2ggbWFnbml0dWRlLWFuZ2xlIGRlc2NyaXB0aW9uIG1hdGNoZXMgdGhlIHF1YWRyYW50LWNvcnJlY3QgZm9ybT8iLCJvcHRpb25zIjpbIkEuIFxcKDVlXntqMTI2LjleXFxjaXJjfVxcKSIsIkIuIFxcKDVlXnstajUzLjFeXFxjaXJjfVxcKSIsIkMuIFxcKDdlXntqMTI2LjleXFxjaXJjfVxcKSIsIkQuIFxcKDVlXntqNTMuMV5cXGNpcmN9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiXFwoLTMrajRcXCkgbGllcyBpbiBxdWFkcmFudCBJSS4gSXRzIG1hZ25pdHVkZSBpcyBcXChcXHNxcnR7M14yKzReMn09NVxcKSBhbmQgaXRzIHF1YWRyYW50LWNvcnJlY3QgYW5nbGUgaXMgXFwoMTI2LjleXFxjaXJjXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlxcKC01My4xXlxcY2lyY1xcKSBwb2ludHMgdG8gcXVhZHJhbnQgSVYsIG5vdCBxdWFkcmFudCBJSS4iLCJDIjoiVGhlIGFuZ2xlIGlzIGNvcnJlY3QsIGJ1dCB0aGUgbWFnbml0dWRlIHNob3VsZCBiZSBcXChcXHNxcnR7OSsxNn09NVxcKSwgbm90IDcuIiwiRCI6IlxcKDUzLjFeXFxjaXJjXFwpIHBvaW50cyB0byBxdWFkcmFudCBJLCBub3QgcXVhZHJhbnQgSUkuIn0sImhpbnQiOiJQbG90IHRoZSBzaWduczogbmVnYXRpdmUgcmVhbCBwYXJ0LCBwb3NpdGl2ZSBpbWFnaW5hcnkgcGFydCBwbGFjZXMgdGhlIHBvaW50IGluIHF1YWRyYW50IElJLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX2FyZ3VtZW50X3F1YWRyYW50X2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3A0X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCB0aW1lLWRvbWFpbiBmb3JtIG1hdGNoZXMgdGhlIHBhaXIgXFwoNWVee2oxMjYuOV5cXGNpcmN9LyhzKzUtajMpICsgNWVeey1qMTI2LjleXFxjaXJjfS8ocys1K2ozKVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKDVlXnstNXR9XFxjb3MoM3QrMTI2LjleXFxjaXJjKXUodClcXCkiLCJCLiBcXCgxMGVeey01dH1cXGNvcygzdCsxMjYuOV5cXGNpcmMpdSh0KVxcKSIsIkMuIFxcKDEwZV57NXR9XFxjb3MoM3QtMTI2LjleXFxjaXJjKXUodClcXCkiLCJELiBcXCg1ZV57LTN0fVxcY29zKDV0KzEyNi45XlxcY2lyYyl1KHQpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQSBjb25qdWdhdGUgcGFpciB3aXRoIHJlc2lkdWUgbWFnbml0dWRlIFxcKHJcXCkgY29tYmluZXMgaW50byBcXCgyclxcLGVeey1hdH1cXGNvcyhidCtcXHRoZXRhKXUodClcXCkuIEhlcmUgXFwoMnI9MTBcXCksIFxcKGE9NVxcKSwgYW5kIFxcKGI9M1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJJdCBtaXNzZXMgdGhlIGZhY3RvciBvZiAyIGZyb20gY29tYmluaW5nIHRoZSBjb25qdWdhdGUgcGFpci4iLCJDIjoiVGhlIGV4cG9uZW50aWFsIG11c3QgZGVjYXkgYXMgXFwoZV57LTV0fVxcKSwgbm90IGdyb3cgYXMgXFwoZV57NXR9XFwpLiIsIkQiOiJJdCBzd2FwcyB0aGUgZGFtcGluZyB2YWx1ZSA1IGFuZCBvc2NpbGxhdGlvbiBmcmVxdWVuY3kgMy4ifSwiaGludCI6IlVzZSB0aGUgY29uanVnYXRlLXBhaXIgZm9ybXVsYTogXFwoMnJcXCxlXnstYXR9XFxjb3MoYnQrXFx0aGV0YSl1KHQpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicmVwZWF0ZWRfcG9sZXMiLCJsYWJlbCI6Ik1hcCByZXBlYXRlZC1wb2xlIHRlcm1zIHRvIHBvd2VycyBvZiB0IiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyBcXChcXG1hdGhjYWx7TH1eey0xfVxcezYvKHMrMileM1xcfVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKDZlXnstMnR9dSh0KVxcKSIsIkIuIFxcKDZ0XFwsZV57LTJ0fXUodClcXCkiLCJDLiBcXCgzdF4yZV57LTJ0fXUodClcXCkiLCJELiBcXCgzdF4yZV57MnR9dSh0KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlVzZSBcXChcXG1hdGhjYWx7TH1eey0xfVxce2FfbS8ocythKV5tXFx9ID0gYV9tXFwsdF57bS0xfWVeey1hdH11KHQpLyhtLTEpIVxcKS4gV2l0aCBcXChhX209NlxcKSwgXFwoYT0yXFwpLCBcXChtPTNcXCk6IHJlc3VsdCBpcyBcXCg2dF4yZV57LTJ0fS8yISA9IDN0XjJlXnstMnR9dSh0KVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHRyZWF0cyBhIHRoaXJkLW9yZGVyIHBvbGUgbGlrZSBhIHNpbXBsZSBmaXJzdC1vcmRlciBwb2xlLiIsIkIiOiJUaGlzIHdvdWxkIG1hdGNoIGEgc2Vjb25kLW9yZGVyIHBvbGUgKFxcKG09MlxcKSksIG5vdCBhIHRoaXJkLW9yZGVyIHBvbGUuIiwiRCI6IlRoZSBleHBvbmVudCBzaWduIGlzIHdyb25nOiBcXChzKzJcXCkgY29ycmVzcG9uZHMgdG8gXFwoZV57LTJ0fVxcKSwgbm90IFxcKGVeeysydH1cXCkuIn0sImhpbnQiOiJBIHRoaXJkLW9yZGVyIHBvbGUgY3JlYXRlcyBcXCh0XnttLTF9ID0gdF4yXFwpIGRpdmlkZWQgYnkgXFwoKG0tMSkhID0gMiFcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoibWF0bGFiX3Jlc2lkdWVfaW50ZXJwcmV0YXRpb24iLCJsYWJlbCI6IkludGVycHJldCBNQVRMQUIgcmVzaWR1ZSBvdXRwdXQiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A2X3ExIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJNQVRMQUIgYHJlc2lkdWVgIHJldHVybnMgYHI9Wy0xMywgN11gLCBgcD1bLTIsIC0xXWAsIGFuZCBgaz1bMl1gLiBXcml0ZSB0aGUgcGFydGlhbC1mcmFjdGlvbiBmb3JtIG9mIFxcKFgocylcXCkgYW5kIG5hbWUgdGhlIHRpbWUtZG9tYWluIHRlcm0gY2F1c2VkIGJ5IGBrPVsyXWAuIiwiaWRlYWxfYW5zd2VyIjoiXFwoWChzKSA9IC0xMy8ocysyKSArIDcvKHMrMSkgKyAyXFwpLiBUaGUgY29uc3RhbnQgdGVybSBcXChrPTJcXCkgcHJvZHVjZXMgXFwoMlxcZGVsdGEodClcXCkgaW4gdGhlIGludmVyc2UgTGFwbGFjZSB0cmFuc2Zvcm0uIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBwYWlyIGVhY2ggcmVzaWR1ZSBcXChyX2lcXCkgd2l0aCBkZW5vbWluYXRvciBcXChzIC0gcF9pXFwpOiBlLmcuLCBcXChyPS0xM1xcKSB3aXRoIFxcKHA9LTJcXCkgZ2l2ZXMgXFwoLTEzLyhzLSgtMikpID0gLTEzLyhzKzIpXFwpLiIsIk11c3Qgd3JpdGUgXFwoLTEzLyhzKzIpXFwpIGFuZCBcXCg3LyhzKzEpXFwpLCBub3QgXFwoLTEzLyhzLTIpXFwpIG9yIFxcKDcvKHMtMSlcXCkuIiwiTXVzdCBpZGVudGlmeSB0aGUgY29uc3RhbnQgMiBhcyBwcm9kdWNpbmcgXFwoMlxcZGVsdGEodClcXCkuIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBjYW4gdHJhbnNsYXRlIE1BVExBQiBvdXRwdXQgYmFjayBpbnRvIHRoZSBzYW1lIHBhcnRpYWwtZnJhY3Rpb24gbG9naWMgdXNlZCBieSBoYW5kLiBFYWNoIHJlc2lkdWUtcG9sZSBwYWlyIGJlY29tZXMgXFwocl9pLyhzLXBfaSlcXCk7IG5vdGUgdGhhdCBcXChwX2lcXCkgaXMgdGhlIHBvbGUgdmFsdWUsIHNvIFxcKHA9LTJcXCkgZ2l2ZXMgZGVub21pbmF0b3IgXFwocy0oLTIpID0gcysyXFwpLiIsImhpbnQiOiJFYWNoIHJlc2lkdWUtcG9sZSBwYWlyIGJlY29tZXMgXFwocl9pLyhzLXBfaSlcXCkuIEJlIGNhcmVmdWw6IFxcKHA9LTJcXCkgbWVhbnMgdGhlIGRlbm9taW5hdG9yIGlzIFxcKHMrMlxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
