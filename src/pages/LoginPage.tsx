import {useState,type FormEvent} from 'react';
import {ArrowRight,Eye,EyeOff,LockKeyhole,ShieldCheck,UserRoundPlus,GraduationCap} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import Brand from '../components/Brand';

type Mode='login'|'register';
export default function LoginPage(){
  const {login,register}=useAuth();
  const [mode,setMode]=useState<Mode>('login');
  const [fullName,setFullName]=useState('');
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [role,setRole]=useState<'student'|'faculty'>('student');
  const [identifier,setIdentifier]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [show,setShow]=useState(false);
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');
  const isRegister=mode==='register';
  function changeMode(next:Mode){setMode(next);setError('');setPassword('');setConfirmPassword('');}
  async function submit(e:FormEvent){
    e.preventDefault();setBusy(true);setError('');
    try{
      if(isRegister){
        if(password!==confirmPassword)throw new Error('The passwords do not match.');
        await register({full_name:fullName,username,email,role,password});
      }else await login(identifier,password);
    }catch(err){setError(err instanceof Error?err.message:isRegister?'Unable to create your account.':'Unable to sign in. Check your credentials and try again.');}
    finally{setBusy(false);}
  }
  return <main className="login-screen">
    <div className="login-left">
      <Brand/>
      <div className="login-message">
        <span className="eyebrow">A BETTER CAMPUS STARTS HERE</span>
        <h1>Listen clearly.<br/><em>Solve together.</em></h1>
        <p>Make campus concerns visible, discuss practical solutions, and follow every report toward a meaningful outcome.</p>
        <div className="login-pill-row"><span><ShieldCheck size={17}/> Accountable process</span><span><LockKeyhole size={17}/> Protected access</span></div>
      </div>
      <small className="login-foot">Metro Dagupan Colleges · Issue-Based Information Online System</small>
    </div>
    <div className="login-right">
      <form className="login-card" onSubmit={submit}>
        <span className="eyebrow">{isRegister?'JOIN THE CAMPUS COMMUNITY':'WELCOME BACK'}</span>
        <h2>{isRegister?'Create your IBIOS account':'Sign in to IBIOS'}</h2>
        <p>{isRegister?'Register as a student or faculty member to start participating.':'Use your IBIOS account to continue.'}</p>
        {error&&<div className="notice notice-error" role="alert">{error}</div>}
        {isRegister?<>
          <label>Full name<input autoComplete="name" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Enter your first and last name" minLength={2} maxLength={100} required/></label>
          <label>Username<input autoComplete="username" value={username} onChange={e=>setUsername(e.target.value.toLowerCase())} placeholder="Choose a username" pattern="[A-Za-z0-9._-]{3,32}" minLength={3} maxLength={32} required/><small>3–32 letters, numbers, periods, underscores, or hyphens.</small></label>
          <label>Institutional email<input type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.edu" maxLength={254} required/></label>
          <label>Campus role<select value={role} onChange={e=>setRole(e.target.value as 'student'|'faculty')}><option value="student">Student</option><option value="faculty">Faculty</option></select></label>
        </>:<label>Username or email<input autoComplete="username" value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder="Enter your username or email" required autoFocus/> </label>}
        <label>Password<span className="password-input"><input autoComplete={isRegister?'new-password':'current-password'} type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder={isRegister?'Create a strong password':'Enter your password'} minLength={isRegister?12:1} maxLength={128} required/><button type="button" className="icon-button" aria-label={show?'Hide password':'Show password'} onClick={()=>setShow(v=>!v)}>{show?<EyeOff size={19}/>:<Eye size={19}/>}</button></span>{isRegister&&<small>Use 12–128 characters. Avoid passwords from other services.</small>}</label>
        {isRegister&&<label>Confirm password<input type={show?'text':'password'} autoComplete="new-password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} minLength={12} maxLength={128} placeholder="Enter the password again" required/></label>}
        <button className="button button-primary button-full login-submit" type="submit" disabled={busy}>{busy?(isRegister?'Creating account…':'Signing in…'):(isRegister?'Create account':'Sign in securely')} {isRegister?<UserRoundPlus size={18}/>:<ArrowRight size={18}/>}</button>
        {isRegister?<div className="login-security"><GraduationCap size={18}/><span>Self-registration is limited to student and faculty roles. Administrator access cannot be requested through this form. Faculty affiliation is self-selected and may need campus review.</span></div>:<div className="login-security"><LockKeyhole size={17}/><span>Need access? Students and faculty can create their own accounts here.</span></div>}
        <div className="auth-switch">{isRegister?'Already have an account?':'New to IBIOS?'} <button type="button" onClick={()=>changeMode(isRegister?'login':'register')}>{isRegister?'Sign in':'Create an account'}</button></div>
      </form>
      <footer className="login-copyright">© {new Date().getFullYear()} Metro Dagupan Colleges</footer>
    </div>
  </main>;
}
