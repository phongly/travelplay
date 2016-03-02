<?php
/**
 * Created by PhpStorm.
 * User: Phong
 * Date: 25-Feb-16
 * Time: 3:03 PM
 */

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\MobileRepository;
class MobileController extends Controller
{
    protected $mobiles;
    //
    public function __construct(MobileRepository $mobiles)
    {
        $this->middleware('auth');

        $this->mobiles = $mobiles;
    }

    public function index(Request $request)
    {
        return view('mobiles.index');
//        $tasks = Task::where('user_id', $request->user()->id)->get();
//        return view('tasks.index', [
//            'tasks'=>$this->tasks->forUser($request->user()),
//        ]);
    }

//    public function store(Request $request)
//    {
//        $this->validate($request, [
//            'name' => 'required|max:255',
//        ]);
//
//        $request->user()->tasks()->create([
//            'name' => $request->name,
//        ]);
//
//        return redirect('/tasks');
//        // Create The Task...
//    }
//
//    public function destroy(Request $request, Task $task)
//    {
//        //
//        $this->authorize('destroy', $task);
//
//        $task->delete();
//
//        return redirect('/tasks');
//    }
}
